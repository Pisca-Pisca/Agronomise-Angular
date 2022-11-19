import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalResetSenhaComponent } from './modal-reset-senha/modal-reset-senha.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    CadastroImovelComponent,
    CadastroUsuariosComponent,
    ModalResetSenhaComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    CadastroImovelComponent,
    CadastroUsuariosComponent,
    ModalResetSenhaComponent
  ],
  providers: [ AuthService ]
})
export class AuthModule { }
