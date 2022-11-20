import { RestService } from './rest.service';
import { Terreno } from './../../pages/terrenos/interface/terreno';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_ENDPOINT = 'terreno';
const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TerrenoService extends RestService<Terreno>{

  constructor(protected http: HttpClient) {
    super(API_ENDPOINT, http);
  }
}
