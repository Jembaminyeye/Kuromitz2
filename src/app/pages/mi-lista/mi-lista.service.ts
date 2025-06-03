import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MiListaService {
  private apiURL = 'http://localhost:3000/mi-lista';

  constructor(private http: HttpClient) {}

  getLista() {
    return this.http.get(this.apiURL);
  }

  addPelicula(pelicula: any) {
    return this.http.post('http://localhost:3000/mi-lista', {
      titulo: pelicula.titulo,
      descripcion: pelicula.descripcion ?? 'Sin descripción disponible.'
    });
  }


  removePelicula(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
