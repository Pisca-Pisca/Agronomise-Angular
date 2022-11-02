import { AlertService } from './alert-service/alert-service.service';
import { Utils } from './utils/utils';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardTerrenoComponent } from './components/card-terreno/card-terreno.component';
import { CardConteudoComponent } from './components/card-conteudo/card-conteudo.component';
import { CardParceirosComponent } from './components/card-parceiros/card-parceiros.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CardTerrenoComponent,
    CardConteudoComponent,
    CardParceirosComponent,
    Page404Component
  ],
  declarations: [
    CardTerrenoComponent,
    CardConteudoComponent,
    CardParceirosComponent,
    Page404Component
  ],
  providers: [
    AlertService,
    Utils,
  ]
})
export class SharedModule { }
