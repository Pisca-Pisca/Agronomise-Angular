import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

interface QueryParams {
  chave: string,
  valor: string | number | boolean
}

@Injectable({
  providedIn: 'root'
})
export class RestService<T> {

  constructor(
    @Inject('API_ENDPOINT') protected endPoint: string,
    protected http: HttpClient
  ) { }

  getAll(queryParams: QueryParams[] = []): Observable<T[]> {
    let params = new HttpParams();

    if (queryParams.length) {
      queryParams.forEach(queryParam => {
        params = params.set(queryParam.chave, queryParam.valor);
      });
    }

    return this.http.get<T[]>(`${API}/${this.endPoint}`, { params: params });
  }

  getById(id: number, queryParams: QueryParams[] = []): Observable<T> {
    let params = new HttpParams();

    if (queryParams.length) {
      queryParams.forEach(queryParam => {
        params = params.set(queryParam.chave, queryParam.valor);
      });
    }

    return this.http.get<T>(`${API}/${this.endPoint}/${id}`, { params: params });
  }

  create(body: T ): Observable<T> {
    return this.http.post<T>(`${API}/${this.endPoint}`, body);
  }

  update(id: number, body: T ): Observable<T> {
    return this.http.put<T>(`${API}/${this.endPoint}/${id}`, body);
  }

  patch(id: number, body: T ): Observable<T> {
    return this.http.patch<T>(`${API}/${this.endPoint}/${id}`, body);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${API}/${this.endPoint}/${id}`);
  }
}
