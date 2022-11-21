import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../interfaces/usuario';
import { RestService } from './rest.service';
import { Injectable } from '@angular/core';

const API_ENDPOINT = 'comodatario';
const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ComodatarioService extends RestService<Usuario>{

  constructor(protected http: HttpClient) {
    super(API_ENDPOINT, http);
  }

  addTerrenoComodatario(dados: any){
    return this.http.post<any>(`${API}/addTerrenoComodatario`, dados);
  }

  removerTerrenoComodatario(dados: any){
    return this.http.post<any>(`${API}/removerTerrenoComodatario`, dados);
  }
}
