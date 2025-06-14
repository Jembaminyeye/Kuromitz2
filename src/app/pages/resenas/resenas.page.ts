import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.page.html',
  styleUrls: ['./resenas.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ResenasPage implements OnInit {
  resenas: any[] = [];

  nuevaResena = {
    titulo: '',
    genero: '',
    duracion: 0,
    estrellas: '',
    puntuacion: 0,
    descripcion: '',
    etiquetas: [],
    autor: localStorage.getItem("usuario") ?? "Invitado"
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.cargarResenas();
  }

  cargarResenas(): void {
    this.api.getResenas().subscribe({
      next: (datos: any) => this.resenas = datos,
      error: (err: any) => console.error("❌ Error al cargar reseñas:", err)
    });
  }

  seleccionarEstrellas(valor: number) {
    this.nuevaResena.puntuacion = valor;
    this.nuevaResena.estrellas = '★'.repeat(valor) + '☆'.repeat(5 - valor);
  }

  publicarResena(): void {
    this.api.addResena(this.nuevaResena).subscribe({
      next: () => {
        alert("✅ Reseña publicada con éxito");
        this.cargarResenas();
        this.nuevaResena = {
          titulo: '',
          genero: '',
          duracion: 0,
          estrellas: '',
          puntuacion: 0,
          descripcion: '',
          etiquetas: [],
          autor: localStorage.getItem("usuario") ?? "Invitado"
        };
      },
      error: (err: any) => {
        console.error(err);
        alert(`❌ Error al publicar reseña: ${err.error?.error || 'desconocido'}`);
      }
    });
  }
}
