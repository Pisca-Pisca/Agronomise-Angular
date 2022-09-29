import { ViaCep } from './../interfaces/via-cep';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_VIACEP = environment.apiViaCep;

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(
    private http: HttpClient
  ) { }

  getCep(cep: number){
    return this.http.get<ViaCep>(`${API_VIACEP}/${cep}/json`);
  }
}
