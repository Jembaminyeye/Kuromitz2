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
      imagen: 'assets/icon/pelis/183973.webp',
      calificacion: 5.0
    },
    {
      titulo: 'Minecraft',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'assets/icon/pelis/375_375.jpeg',
      calificacion: 4.1
    },
    {
      titulo: 'Que paso ayer',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'assets/icon/pelis/images.jfif',
      calificacion: 4.9
    },
    {
      titulo: 'Batman',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'assets/icon/pelis/batman.jpg',
      calificacion: 4.5
    },
  ];
  populares = [
    {
      titulo: 'Dune 2',
      imagen: 'assets/icon/pelis/dune2.webp',
      calificacion: 5.0,
    },
    {
      titulo: 'Godzilla x Kong',
      imagen: 'assets/icon/pelis/god.jpg',
      calificacion: 4.8,
    },
    {
      titulo: 'The Fall Guy',
      imagen: 'assets/icon/pelis/fallguy.jpg',
      calificacion: 4.7,
    },
    {
      titulo: 'Civil War',
      imagen: 'assets/icon/pelis/civil.jpg',
      calificacion: 4.6,
    },
    {
      titulo: 'The Beekeeper',
      imagen: 'assets/icon/pelis/beekeeper.jpg',
      calificacion: 4.5,
    },
  ];

  romanticas = [
    {
      titulo: 'A todos los chicos de los que me enamoré',
      imagen: 'assets/icon/pelis/enamore.webp',
      calificacion: 4.3,
    },
    {
      titulo: 'El stand de los besos',
      imagen: 'assets/icon/pelis/stand.jpg',
      calificacion: 4.0,
    },
  ];

  terror = [
    {
      titulo: 'El Conjuro',
      imagen: 'assets/icon/pelis/conjuro.jpg',
      calificacion: 4.5,
    },
    {
      titulo: 'It',
      imagen: 'assets/icon/pelis/it.jpg',
      calificacion: 4.2,
    },
  ];
}
