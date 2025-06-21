import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Buscar películas por nombre
  buscarPeliculas(query: string) {
    const apiKey = '9005097481cb5f13eb77846bbd00df11';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${encodeURIComponent(query)}`;
    return this.http.get(url);
  }

  // Obtener la lista del usuario
  getLista(usuarioId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/mi-lista/${usuarioId}`);
  }

  // Agregar película a la lista
  addPelicula(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/mi-lista`, data);
}

  // Eliminar película de la lista
  deletePelicula(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/mi-lista/${id}`);
  }

  // Registrar usuario
  registrarUsuario(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios/registro`, data);
  }

  // Login
  login(correo: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios/login`, { correo, contraseña });
  }


  // Reseñas
  getResenas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/resenas`);
  }

  addResena(resena: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/resenas`, resena);
  }
}
