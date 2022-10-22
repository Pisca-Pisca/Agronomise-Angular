import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParceirosRoutingModule } from './parceiros-routing.module';
import { ParceirosComponent } from './parceiros.component';


@NgModule({
  declarations: [
    ParceirosComponent
  ],
  imports: [
    CommonModule,
    ParceirosRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ParceirosModule { }
