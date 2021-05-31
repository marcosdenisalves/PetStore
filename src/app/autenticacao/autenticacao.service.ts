import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/user/login';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient) {}

  autenticar(usuario: String, senha: string) :Observable<any>{
    return this.httpClient.post(url, {
      userName: usuario,
      password: senha,
    });
  }
}
