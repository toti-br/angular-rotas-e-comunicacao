import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CepResponse from './model/cep-response.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  SERVICE_URL = 'https://viacep.com.br/ws'
  RESPONSE_FORMAT = 'json'

  constructor(private http: HttpClient) { }

  pesquisarCep(cep: string) {
    return this.http
    .get<CepResponse>(`${this.SERVICE_URL}/${cep}/${this.RESPONSE_FORMAT}`)
  }
}
