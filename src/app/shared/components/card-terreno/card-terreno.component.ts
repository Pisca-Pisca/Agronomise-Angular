import { finalize, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from './../../alert-service/alert-service.service';
import { ComodatarioService } from './../../services/comodatario.service';
import { Terreno } from './../../../pages/terrenos/interface/terreno';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-terreno',
  templateUrl: './card-terreno.component.html',
  styleUrls: ['./card-terreno.component.scss']
})
export class CardTerrenoComponent implements OnInit {

  tipoUsuario: string = JSON.parse(localStorage.getItem('tipoUsuario'));
  curtido: boolean = localStorage.getItem("terrenoCurtido") ? JSON.parse(localStorage.getItem("terrenoCurtido")) : false;
  usuarioLogado: boolean = localStorage.getItem("usuarioLogado") ? JSON.parse(localStorage.getItem("usuarioLogado")) : false;
  userId = JSON.parse(localStorage.getItem("userId"));

  @Input("terreno") terreno: Terreno | null = null;
  @Input("resultadoCompletoTerrenos") terrenos: Terreno[] = [];
  @Input("pagina") pagina: string = "";

  constructor(
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private comodatarioService: ComodatarioService
  ) { }

  ngOnInit() {
  }

  curtir(){
    if(this.curtido === false){
      this.curtido = true;
      this.addTerenoComodatario();
    }else{
      this.curtido = false;
    }
  }

  desistirTerreno(){
    this.spinner.show();

    this.comodatarioService.removerTerrenoComodatario({idComodatario: this.userId, idTerreno: this.terreno.id})
        .pipe(take(1), finalize(() => this.spinner.hide()))
        .subscribe(async (response: any) => {
          if(response.success){
            localStorage.setItem("terrenoCurtido", JSON.stringify(false));

            this.alertService.success("Sinalizado interesse removida com sucesso!").then(() => {
              window.location.reload();
            });
          }else{
            this.alertService.info(response.message);
          }
        }, (error: HttpErrorResponse) => {
          this.spinner.hide();
          this.alertService.error(error);
        });
  }

  addTerenoComodatario(){
    this.spinner.show();

    this.comodatarioService.addTerrenoComodatario({idComodatario: this.userId, idTerreno: this.terreno.id})
        .pipe(take(1), finalize(() => this.spinner.hide()))
        .subscribe(async (response: any) => {
            if(response.success){
              localStorage.setItem("terrenoCurtido", JSON.stringify(true));

              this.alertService.success("Sinalizado interesse com sucesso!").then(() => {
                window.location.reload();
              });
            }else{
              this.alertService.info(response.message);
            }
        }, (error: HttpErrorResponse) => {
          this.spinner.hide();
          this.alertService.error(error);
        });
  }

}
