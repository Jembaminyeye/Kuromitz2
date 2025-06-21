import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.page.html',
  styleUrls: ['./mi-lista.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MiListaPage {
  lista: any[] = [];

  constructor(private apiService: ApiService) {}

  ionViewWillEnter() {
    const usuarioId = Number(localStorage.getItem('usuarioId'));
    if (!usuarioId) {
      this.lista = []; // Limpiar la lista si no hay sesión
      return;
    }

    this.cargarLista(usuarioId);
}

  cargarLista(usuarioId: number) {

    if (!usuarioId) {
      console.warn("🔒 Usuario no logueado, no se puede cargar la lista.");
      this.lista = [];
      return;
    }

    this.apiService.getLista(usuarioId).subscribe({
      next: (data: any) => {
        this.lista = data;
      },
      error: err => {
        console.error("Error cargando lista:", err);
        this.lista = [];
      }
    });
  }


  
  eliminar(id: number) {
    this.apiService.deletePelicula(id).subscribe({
      next: () => {
        const usuarioId = Number(localStorage.getItem('usuarioId'));
        this.cargarLista(usuarioId);
      },
      error: err => alert("Error al eliminar")
    });
  }
  peliculasPopulares: any[] = [];

}
