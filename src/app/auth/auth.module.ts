import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    LoginComponent,
    CadastroImovelComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  exports: [
    LoginComponent,
    CadastroImovelComponent
  ]
})
export class AuthModule { }
