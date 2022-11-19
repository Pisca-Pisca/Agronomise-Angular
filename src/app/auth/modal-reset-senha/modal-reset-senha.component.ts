import { HttpErrorResponse } from '@angular/common/http';
import { take, finalize } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from './../../shared/alert-service/alert-service.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-reset-senha',
  templateUrl: './modal-reset-senha.component.html',
  styleUrls: ['./modal-reset-senha.component.scss']
})
export class ModalResetSenhaComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  enviarEmail() {
    if(this.form.valid){
      this.spinner.show();

      this.auth.resetSenha(this.form.value)
        .pipe(take(1), finalize(() => this.spinner.hide()))
        .subscribe((response: any) => {
          this.alertService.success(response.message);
        }, (error: HttpErrorResponse) => {
          this.alertService.error(error);
        });
    }
  }
}
