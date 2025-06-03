import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MiListaService } from './mi-lista.service';

@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.page.html',
  styleUrls: ['./mi-lista.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MiListaPage {
  lista: any[] = [];

  constructor(private listaService: MiListaService) {}

  ionViewWillEnter() {
    this.cargarLista();
  }

  cargarLista() {
    this.listaService.getLista().subscribe({
      next: (data: any) => {
        console.log('Películas recibidas del backend:', data);
        this.lista = data;
      },
      error: err => console.error("Error cargando lista:", err)
    });
  }

  eliminar(id: number) {
    this.listaService.removePelicula(id).subscribe({
      next: () => this.cargarLista(),
      error: err => alert("Error al eliminar")
    });
  }
}

