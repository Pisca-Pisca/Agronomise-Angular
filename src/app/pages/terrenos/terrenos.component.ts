import { HttpErrorResponse } from '@angular/common/http';
import { take, finalize } from 'rxjs/operators';
import { TerrenoService } from './../../shared/services/terreno.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from './../../shared/alert-service/alert-service.service';
import { Terreno } from './interface/terreno';
import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-terrenos',
  templateUrl: './terrenos.component.html',
  styleUrls: ['./terrenos.component.scss']
})
export class TerrenosComponent implements OnInit {

  /* Config slider*/
  value: number = 0;
  highValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return value + "m²";
    }
  };
  /* fim  Config slider*/

  page: number = 1;

  terrenos: Terreno[] = [];
  cidades: any[] = [];
  estados: any[] = [];

  form = this.fb.group({
    metragem: [""],
    cidade: [""],
    estado: [""]
  });

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private terrenoService: TerrenoService
  ) { }

  ngOnInit() {
    this.getTerrenos();
  }

  getTerrenos(){
    this.spinner.show();

    this.terrenoService.getAll()
    .pipe(take(1), finalize(() => this.spinner.hide()))
    .subscribe((response: any) => {
        this.terrenos = response;

        this.terrenos.forEach(terreno => {this.cidades.push(terreno.cidade)});
        this.terrenos.forEach(terreno => {this.estados.push(terreno.estado)});
    }, (error: HttpErrorResponse) => {
      this.spinner.hide();
      this.alertService.error(error);
    });
  }

  filtrar(){
    this.spinner.show();

    this.terrenoService.filtrarTerrenos(this.form.value)
    .pipe(take(1), finalize(() => this.spinner.hide()))
    .subscribe((response: any) => {
        this.terrenos = response;
        console.log(this.estados)
    }, (error: HttpErrorResponse) => {
      this.spinner.hide();
      this.alertService.error(error);
    });
  }
}
