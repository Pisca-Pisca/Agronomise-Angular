import { HttpErrorResponse } from '@angular/common/http';
import { finalize, take } from 'rxjs/operators';
import { AuthService } from './../service/auth.service';
import { AlertService } from './../../shared/alert-service/alert-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalResetSenhaComponent } from './../modal-reset-senha/modal-reset-senha.component';
import { CadastroUsuariosComponent } from './../cadastro-usuarios/cadastro-usuarios.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  });

  modalRef?: BsModalRef;
  showPassword: boolean = false;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    let user = localStorage.getItem("usuarioLogado") ?  localStorage.getItem("usuarioLogado") : JSON.stringify(false);

    if(user)
      window.open('/home', "_self");
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  logar(){
    if(this.form.valid){

      this.spinner.show();

      this.auth.login(this.form.value)
        .pipe(take(1), finalize(() => this.spinner.hide()))
        .subscribe(async (response: any) => {
          if(response.success){
            localStorage.setItem("usuarioLogado", JSON.stringify(true));

            await this.verificaTipoUsuario(this.form.controls.email.value);

            setTimeout(() => {
              window.open('/home', "_self");
            }, 1000)
          }else{
            this.alertService.error(response.error);
          }
        }, (error: HttpErrorResponse) => {
          this.alertService.error(error);
        });
    }
  }

  async verificaTipoUsuario(email: string) {
    this.spinner.show();

    await this.auth.verificaUsuario({email: email})
    .pipe(take(1), finalize(() => this.spinner.hide()))
    .subscribe((response: any) => {
      if(response.success){
        const data = response.data;
        localStorage.setItem("userId", JSON.stringify(data.id));

        if(data.tipoUsuario === "Comodante"){
          localStorage.setItem("tipoUsuario", JSON.stringify("Comodante"));
        }else{
          localStorage.setItem("tipoUsuario", JSON.stringify("Comodatario"));
        }
      }
    }, (error: HttpErrorResponse) => {
      this.alertService.error(error);
    });
  }

  openModal(){
    this.modalRef = this.modalService.show(CadastroUsuariosComponent,  Object.assign({}, { class: 'modal-fullscreen' }));
  }

  openModalResetSenha(){
    this.modalRef = this.modalService.show(ModalResetSenhaComponent,  Object.assign({}, { class: 'modal-dialog-centered' }));
  }
}
