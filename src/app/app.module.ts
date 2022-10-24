import { FacaVoceMesmoModule } from './pages/faca-voce-mesmo/faca-voce-mesmo.module';
import { TerrenosModule } from './pages/terrenos/terrenos.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ParceirosModule } from './pages/parceiros/parceiros.module';
import { SobreNosModule } from './pages/sobre-nos/sobre-nos.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule,
    AuthModule,
    CoreModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    TerrenosModule,
    FacaVoceMesmoModule,
    ParceirosModule,
    SobreNosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
