import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resenas',
  standalone: true,
  templateUrl: './resenas.page.html',
  styleUrls: ['./resenas.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class ResenasPage {
  resenas = [
    {
      titulo: 'Dune: Parte Dos (2024)',
      tituloCorto: 'Dune',
      genero: 'Ciencia Ficción',
      duracion: 166,
      estrellas: '★★★★☆',
      puntuacion: 4.5,
      descripcion: 'Una secuela épica que expande el universo de Dune con impresionantes efectos visuales y actuaciones sólidas...',
      etiquetas: ['Épica', 'Aventura', 'Adaptación'],
      likes: 24,
      comentarios: 8,
      autor: 'María Cinéfila',
      autorIniciales: 'MC',
      fecha: '15 abril, 2024',
    },
    {
      titulo: 'Oppenheimer (2023)',
      tituloCorto: 'Oppenheimer',
      genero: 'Drama Histórico',
      duracion: 180,
      estrellas: '★★★★★',
      puntuacion: 5,
      descripcion: 'Una intensa exploración del científico que lideró el Proyecto Manhattan. Dirección magistral de Nolan y actuación impactante.',
      etiquetas: ['Biografía', 'Historia', 'Drama'],
      likes: 31,
      comentarios: 12,
      autor: 'Carlos Crítico',
      autorIniciales: 'CC',
      fecha: '10 marzo, 2024',
    },
    {
      titulo: 'Spider-Man: Across the Spider-Verse (2023)',
      tituloCorto: 'Spider-Verse',
      genero: 'Animación',
      duracion: 140,
      estrellas: '★★★★☆',
      puntuacion: 4.7,
      descripcion: 'Visualmente deslumbrante y emocionalmente potente. Una secuela animada que supera todas las expectativas.',
      etiquetas: ['Superhéroes', 'Multiverso', 'Animación'],
      likes: 45,
      comentarios: 20,
      autor: 'Laura Animada',
      autorIniciales: 'LA',
      fecha: '22 febrero, 2024',
    },
  ];
}
