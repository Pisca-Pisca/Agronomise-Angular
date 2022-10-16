import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from './../../shared/alert-service/alert-service.service';
import { FacaVoceMesmoService } from './service/faca-voce-mesmo.service';
import { Conteudo } from './interface/conteudo';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-faca-voce-mesmo',
  templateUrl: './faca-voce-mesmo.component.html',
  styleUrls: ['./faca-voce-mesmo.component.scss']
})
export class FacaVoceMesmoComponent implements OnInit {

  page: number = 1;

  conteudos: Conteudo[] = [];

  constructor(
    private _conteudoService: FacaVoceMesmoService,
    private spinner: NgxSpinnerService,
    private alerta: AlertService
  ) { }

  ngOnInit(): void {
    this.getConteudos();
  }

  getConteudos(){
    this.spinner.show();

    this._conteudoService.getAll()
      .pipe(take(1), finalize(() => this.spinner.hide()))
      .subscribe(response => {
        this.conteudos = response;
      }, (error: HttpErrorResponse) => {
        this.alerta.error(error);
      });
  }
}
