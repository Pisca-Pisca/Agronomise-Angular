import { environment } from './../../../environments/environment';
import { RestService } from '../../shared/services/rest.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../interface/auth';

const API_ENDPOINT = 'auth';
const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService<Auth>{

  constructor(protected http: HttpClient) {
    super(API_ENDPOINT, http);
   }

   criarUsuarioLogin(queryParams: any){
    return this.http.post<any[]>(`${API}/criarUsuarioLogin`, queryParams);
  }

   login(queryParams: any){
    return this.http.post<any[]>(`${API}/login`, queryParams);
  }

  logout(){
   return this.http.get<any[]>(`${API}/logout`);
  }

   resetSenha(queryParams: any){
    return this.http.post<any[]>(`${API}/resetSenha`, queryParams);
  }

  verificaUsuario(queryParams: any){
   return this.http.post<any[]>(`${API}/verificaTipoUsuario`, queryParams);
  }
}
