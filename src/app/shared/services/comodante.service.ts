import { Usuario } from './../interfaces/usuario';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { Injectable } from '@angular/core';

const API_ENDPOINT = 'comodante';
const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ComodanteService extends RestService<Usuario>{

  constructor(protected http: HttpClient) {
    super(API_ENDPOINT, http);
  }

  addTerrenoComodante(dados: any){
      return this.http.post<any>(`${API}/addTerrenoComodante`, dados);
  }
}
