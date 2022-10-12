import { FacaVoceMesmoComponent } from './faca-voce-mesmo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacaVoceMesmoRoutingModule } from './faca-voce-mesmo-routing.module';


@NgModule({
  declarations: [
    FacaVoceMesmoComponent
  ],
  imports: [
    CommonModule,
    FacaVoceMesmoRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class FacaVoceMesmoModule { }
