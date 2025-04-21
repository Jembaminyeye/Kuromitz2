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
      titulo: 'Título de Película 1',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'Imagen de Película 1',
    },
    {
      titulo: 'Título de Película 2',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'Imagen de Película 2',
    },
    {
      titulo: 'Título de Película 3',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'Imagen de Película 3',
    },
    {
      titulo: 'Título de Película 4',
      descripcion: 'Descripción breve de la película con detalles importantes para captar el interés del usuario.',
      imagen: 'Imagen de Película 4',
    },
  ];
}
