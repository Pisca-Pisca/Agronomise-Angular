import { HttpErrorResponse } from '@angular/common/http';
import { take, finalize } from 'rxjs/operators';
import { ParceirosService } from './service/parceiros.service';
import { AlertService } from './../../shared/alert-service/alert-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Parceiro } from './interface/parceiro';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {

  page: number = 1;
  parceiros: Parceiro[] = [];

  constructor(
    private _parceiroService: ParceirosService,
    private spinner: NgxSpinnerService,
    private alerta: AlertService
  ) { }

  ngOnInit(): void {
    this.getparceiros();
  }

  getparceiros(){
    this.spinner.show();

    this._parceiroService.getAll()
      .pipe(take(1), finalize(() => this.spinner.hide()))
      .subscribe(response => {
        this.parceiros = response;
      }, (error: HttpErrorResponse) => {
        this.alerta.error(error);
      });
  }

}
