import { AlertService } from './alert-service/alert-service.service';
import { Utils } from './utils/utils';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardTerrenoComponent } from './components/card-terreno/card-terreno.component';
import { CardConteudoComponent } from './components/card-conteudo/card-conteudo.component';
import { CardParceirosComponent } from './components/card-parceiros/card-parceiros.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CardTerrenoComponent,
    CardConteudoComponent,
    CardParceirosComponent
  ],
  declarations: [
    CardTerrenoComponent,
    CardConteudoComponent,
    CardParceirosComponent
  ],
  providers: [
    AlertService,
    Utils,
  ]
})
export class SharedModule { }
