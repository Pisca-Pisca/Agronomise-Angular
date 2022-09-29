import { AlertService } from './alert-service/alert-service.service';
import { Utils } from './utils/utils';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardTerrenoComponent } from './card-terreno/card-terreno.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CardTerrenoComponent
  ],
  declarations: [
    CardTerrenoComponent
  ],
  providers: [
    AlertService,
    Utils,
  ]
})
export class SharedModule { }
