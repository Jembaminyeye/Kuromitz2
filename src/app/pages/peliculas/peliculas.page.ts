import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
  standalone: false,
})
export class PeliculasPage {
  peliculas = [
    {
      titulo: 'MINIONS',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'assets/icon/183973.webp',
      calificacion: 5.0
    },
    {
      titulo: 'Minecraft',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'assets/icon/375_375.jpeg',
      calificacion: 4.1
    },
    {
      titulo: 'Que paso ayer',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'assets/icon/images.jfif',
      calificacion: 4.9
    },
    {
      titulo: 'Batman',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'assets/icon/batman.jpg',
      calificacion: 4.5
    },
  ];
}
