// filepath: src/app/pages/resenas/resena.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ResenaService {
  private apiURL = 'http://localhost:3000/resenas';

  constructor(private http: HttpClient) {}

  getResenas() {
    return this.http.get(this.apiURL);
  }

  addResena(resena: any) {
    return this.http.post(this.apiURL, resena);
  }
}