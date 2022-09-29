import { FormsModule } from '@angular/forms';
import { TerrenosComponent } from './terrenos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerrenosRoutingModule } from './terrenos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    TerrenosRoutingModule,
    SharedModule,
    FormsModule,
    NgxSliderModule,
    NgxPaginationModule
  ],
  declarations: [TerrenosComponent]
})
export class TerrenosModule { }
