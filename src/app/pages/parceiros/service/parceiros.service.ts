import { HttpClient } from '@angular/common/http';
import { RestService } from './../../../shared/services/rest.service';
import { Parceiro } from './../interface/parceiro';
import { Injectable } from '@angular/core';

const API_ENDPOINT = 'parceiros';

@Injectable({
  providedIn: 'root'
})
export class ParceirosService extends RestService<Parceiro> {

  constructor(protected http: HttpClient) {
    super(API_ENDPOINT, http);
   }

}
