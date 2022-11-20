import { ComodatarioService } from './services/comodatario.service';
import { ComodanteService } from './services/comodante.service';
import { TerrenoService } from './services/terreno.service';
import { AlertService } from './alert-service/alert-service.service';
import { Utils } from './utils/utils';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardTerrenoComponent } from './components/card-terreno/card-terreno.component';
import { CardConteudoComponent } from './components/card-conteudo/card-conteudo.component';
import { CardParceirosComponent } from './components/card-parceiros/card-parceiros.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminComodanteComponent } from './components/admin-comodante/admin-comodante.component';
import { AdminComodatarioComponent } from './components/admin-comodatario/admin-comodatario.component';

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
    Page404Component,
    AdminComodanteComponent,
    AdminComodatarioComponent
  ],
  declarations: [
    CardTerrenoComponent,
    CardConteudoComponent,
    CardParceirosComponent,
    Page404Component,
    AdminComodanteComponent,
    AdminComodatarioComponent
  ],
  providers: [
    AlertService,
    Utils,
    TerrenoService,
    ComodanteService,
    ComodatarioService
  ]
})
export class SharedModule { }
