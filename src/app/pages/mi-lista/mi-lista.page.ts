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
    this.cargarLista();
  }

  cargarLista() {
  const usuarioId = Number(localStorage.getItem('usuarioId'));
  this.apiService.getLista(usuarioId).subscribe({
    next: (data: any) => {
      this.lista = data;
    },
    error: err => console.error("Error cargando lista:", err)
  });
}

  eliminar(id: number) {
    this.apiService.deletePelicula(id).subscribe({
      next: () => this.cargarLista(),
      error: err => alert("Error al eliminar")
    });
  }
}
