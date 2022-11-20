import { finalize, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from './../../shared/alert-service/alert-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ViaCepService } from './../../shared/services/via-cep.service';
import { ComodanteService } from './../../shared/services/comodante.service';
import { TerrenoService } from './../../shared/services/terreno.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.scss']
})
export class CadastroImovelComponent implements OnInit {

  form = this.fb.group({
    cep: ["", [Validators.required]],
    endereco: ["", [Validators.required]],
    complemento: [""],
    numero: ["", [Validators.required]],
    cidade: ["", [Validators.required]],
    bairro: ["", [Validators.required]],
    estado: ["", [Validators.required]],
    metragem: ["", [Validators.required]],
    titulo: ["", [Validators.required]],
    descricao: ["", [Validators.required]],
    uploadImagem: [null, [Validators.required]],
    uploadEscritura: [null, [Validators.required]],
    comodante: [""],
    comodatario: [""]
  });

  idcomodante = localStorage.getItem("idComodante") ? localStorage.getItem("idComodante") : "";

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private comodanteService: ComodanteService,
    private terrenoService: TerrenoService,
    private viaCep: ViaCepService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
  }

  uploadDocumentos(campo: string){
    if(campo === "uploadImagem"){
      const inputFile =  document.createElement("input");

      inputFile.id = "uploadImagem";
      inputFile.type = "file";
      inputFile.style.display = "none";
      inputFile.accept = ".png, .jpg, .jpeg";
      inputFile.click();

      inputFile.onchange = (ev: any) => {
        this.form.controls.uploadImagem.setValue(ev.target.files[0]);
      }

    }else if(campo === "uploadEscritura"){
      const inputFileEscritura =  document.createElement("input");

      inputFileEscritura.id = "uploadEscritura";
      inputFileEscritura.type = "file";
      inputFileEscritura.style.display = "none";
      inputFileEscritura.accept = ".pdf";
      inputFileEscritura.click();

      inputFileEscritura.onchange = (ev: any) => {
        this.form.controls.uploadEscritura.setValue(ev.target.files[0]);
      }

    }
  }

  verificaCep(){
    this.spinner.show();

    this.viaCep.getCep(this.form.controls['cep'].value)
    .pipe(take(1), finalize(() => this.spinner.hide()))
    .subscribe((response: any) => {
      this.form.controls['endereco'].setValue(response.logradouro);
      this.form.controls['estado'].setValue(response.uf);
      this.form.controls['bairro'].setValue(response.bairro)
      this.form.controls['cidade'].setValue(response.localidade)
      this.form.controls['complemento'].setValue(response.complemento)
    }, (error: HttpErrorResponse) => {
      this.spinner.hide();
      this.alertService.error(error);
    });
  }

  async cadastrar(){
    this.spinner.show();

    this.form.controls.comodante.setValue(this.idcomodante);

    let dados = new FormData();

    for ( const key of Object.keys(this.form.value) ) {
      const value = this.form.value[key];
      dados.append(key, value);
    }

    if(this.form.valid){
        this.terrenoService.create(dados)
        .pipe(take(1), finalize(() => this.spinner.hide()))
        .subscribe(async (response: any) => {
          if(response.success) {
            this.spinner.show();

            let dados = {
              idComodante: this.form.controls.comodante.value,
              idTerreno: response.data
          }

            await this.comodanteService.addTerrenoComodante(dados)
            .pipe(take(1), finalize(() => this.spinner.hide()))
            .subscribe(async (response: any) => {
              if(response.success) {
                await this.alertService.success("Terreno criado com sucesso. Faça login e aproveite a plataforma.", false, 6000);
                window.open("/login", "_self");
              }
            });
          }else{
            this.alertService.warning(response.message);
          }
        }, (error: HttpErrorResponse) => {
          this.alertService.error(error);
        });
    }else{
      this.spinner.hide();
    }
  }
}
