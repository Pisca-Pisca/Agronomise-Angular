import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';

@NgModule({
  declarations: [
    LoginComponent,
    CadastroImovelComponent,
    CadastroUsuariosComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  exports: [
    LoginComponent,
    CadastroImovelComponent,
    CadastroUsuariosComponent
  ]
})
export class AuthModule { }
