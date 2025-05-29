import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private apiURL = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  registrar(usuario: any) {
    return this.http.post(`${this.apiURL}/registro`, usuario);
  }

  login(credenciales: any) {
    return this.http.post(`${this.apiURL}/login`, credenciales);
  }
}
