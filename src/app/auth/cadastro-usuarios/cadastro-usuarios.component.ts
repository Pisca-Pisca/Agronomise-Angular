import { ComodatarioService } from './../../shared/services/comodatario.service';
import { ComodanteService } from './../../shared/services/comodante.service';
import { CadastroImovelComponent } from './../cadastro-imovel/cadastro-imovel.component';
import { finalize, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ViaCepService } from './../../shared/services/via-cep.service';
import { AuthService } from './../service/auth.service';
import { AlertService } from './../../shared/alert-service/alert-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  form = this.fb.group({
    primeiroNome: ["", [Validators.required]],
    sobrenome: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    senha: ["", [Validators.required]],
    nascimento: ["", [Validators.required]],
    cpf: ["", [Validators.required]],
    cep: ["", [Validators.required]],
    rg: ["", [Validators.required]],
    endereco: ["", [Validators.required]],
    complemento: [""],
    numero: ["", [Validators.required]],
    cidade: ["", [Validators.required]],
    bairro: ["", [Validators.required]],
    estado: ["", [Validators.required]],
    uploadDocumentoFoto: [null, [Validators.required]],
    uploadComprovanteEndereco: [null, [Validators.required]],
    terreno: [""]
  });

  modalRef?: BsModalRef;
  showPassword: boolean = false;
  role: string = "";

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private auth: AuthService,
    private viaCep: ViaCepService,
    private comodanteService: ComodanteService,
    private comodatarioService: ComodatarioService
  ) { }

  ngOnInit() {
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  uploadDocumentos(campo: string){
    if(campo === "uploadDocFoto"){
      const inputFile =  document.createElement("input");

      inputFile.id = "uploadDocFoto";
      inputFile.type = "file";
      inputFile.style.display = "none";
      inputFile.accept = ".png, .jpg, .jpeg,";
      inputFile.click();

      inputFile.onchange = (ev: any) => {
        this.form.controls.uploadDocumentoFoto.setValue(ev.target.files[0]);
      }

    }else if(campo === "uploadCompEnd"){
      const inputFileEscritura =  document.createElement("input");

      inputFileEscritura.id = "uploadCompEnd";
      inputFileEscritura.type = "file";
      inputFileEscritura.style.display = "none";
      inputFileEscritura.accept = ".pdf";
      inputFileEscritura.click();

      inputFileEscritura.onchange = (ev: any) => {
        this.form.controls.uploadComprovanteEndereco.setValue(ev.target.files[0]);
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

  changeRole(event: any){
    this.role = event.value;
  }

  async cadastrar(){
    this.spinner.show();

   let dados = new FormData();

   if(this.role == ''){
     this.spinner.hide();
     this.alertService.info("Escolha o que deseja fazer na plataforma Agronomi-se.");
   }

    for ( const key of Object.keys(this.form.value) ) {
      const value = this.form.value[key];
      dados.append(key, value);
    }

    if(this.form.valid){
      if(this.role == "comodatario"){
        this.comodatarioService.create(dados)
        .pipe(take(1), finalize(() => this.spinner.hide()))
        .subscribe(async (response: any) => {
          if(response.success) {
            this.spinner.show();

            let dadosLogin = {
              "email": this.form.controls.email.value,
              "senha": this.form.controls.senha.value
            };

            await this.auth.criarUsuarioLogin(dadosLogin)
            .pipe(take(1), finalize(() => this.spinner.hide()))
            .subscribe(async (response: any) => {
              if(response.success) {
                await this.alertService.success("Usuário criado com sucesso. Faça login e aproveite a plataforma.", false, 6000);
                window.open("/login", "_self");
              }
            });
          }else{
            this.alertService.warning(response.message);
          }
        }, (error: HttpErrorResponse) => {
          this.alertService.error(error);
        });
      }else if(this.role == "comodante"){
        this.comodanteService.create(dados)
        .pipe(take(1), finalize(() => this.spinner.hide()))
        .subscribe(async (response: any) => {
          if(response.success) {
            this.spinner.show();

            localStorage.setItem("idComodante", response.data);

            let dadosLogin = {
              "email": this.form.controls.email.value,
              "senha": this.form.controls.senha.value
            };

            await this.auth.criarUsuarioLogin(dadosLogin)
            .pipe(take(1), finalize(() => this.spinner.hide()))
            .subscribe(async (response: any) => {
              if(response.success) {
                await this.alertService.success("Usuário criado com sucesso.", false, 6000);
                this.bsModalRef.hide();
                this.modalRef = this.modalService.show(CadastroImovelComponent,  Object.assign({}, { class: 'modal-fullscreen' }));
              }
            });
          }else{
            this.alertService.warning(response.message);
          }
        }, (error: HttpErrorResponse) => {
          this.alertService.error(error);
        });
      }

    }else{
      this.spinner.hide();
    }
  }
}
