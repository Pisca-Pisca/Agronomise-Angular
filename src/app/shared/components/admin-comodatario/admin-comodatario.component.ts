import { TerrenoService } from './../../services/terreno.service';
import { Terreno } from './../../../pages/terrenos/interface/terreno';
import { HttpErrorResponse } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from './../../alert-service/alert-service.service';
import { AuthService } from './../../../auth/service/auth.service';
import { finalize, take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-comodatario',
  templateUrl: './admin-comodatario.component.html',
  styleUrls: ['./admin-comodatario.component.scss']
})
export class AdminComodatarioComponent implements OnInit {

  nomeCompleto: string = "";
  terrenos: Terreno[] = [];
  userId = JSON.parse(localStorage.getItem("userId"));

  constructor(
    public bsModalRef: BsModalRef,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private auth: AuthService,
    private terrenoService: TerrenoService
  ) { }

  ngOnInit(): void {
    this.terrenoRelacionadoComodatario();
    this.nomeCompleto = JSON.parse(localStorage.getItem("userName"));
  }

  logout(){
    this.spinner.show();

      this.auth.logout()
        .pipe(take(1), finalize(() => this.spinner.hide()))
        .subscribe(async (response: any) => {
          if(response.success){
            localStorage.removeItem("usuarioLogado");
            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
            localStorage.removeItem("tipoUsuario");

            window.location.reload();
          }else{
            this.alertService.error(response.error);
          }
        }, (error: HttpErrorResponse) => {
          this.alertService.error(error);
        });
  }

  terrenoRelacionadoComodatario(){
    this.spinner.show();

    this.terrenoService.BuscarTerrenoComodatario({idComodatario: this.userId})
        .pipe(take(1), finalize(() => this.spinner.hide()))
        .subscribe(async (response: any) => {
            this.terrenos = response;
        }, (error: HttpErrorResponse) => {
          this.spinner.hide();
          this.alertService.error(error);
        });
  }
}
