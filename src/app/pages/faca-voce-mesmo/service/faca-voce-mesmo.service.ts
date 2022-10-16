import { HttpClient } from '@angular/common/http';
import { RestService } from './../../../shared/services/rest.service';
import { Conteudo } from './../interface/conteudo';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';

const API_ENDPOINT = 'conteudos';
const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FacaVoceMesmoService extends RestService<Conteudo> {

  constructor(protected http: HttpClient) {
    super(API_ENDPOINT, http);
   }
}
