import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
  standalone: false,
})
export class SeriesPage {
  series = [
    {
      titulo: 'Stranger Things',
      descripcion: 'Una serie de ciencia ficción y suspenso ambientada en los años 80.',
      imagen: 'assets/icon/series/stranger things.jpg',
      calificacion: 4.8
    },
    {
      titulo: 'Breaking Bad',
      descripcion: 'Un profesor de química se convierte en narcotraficante.',
      imagen: 'assets/icon/series/breaking.jpg',
      calificacion: 5.0
    },
    {
      titulo: 'The Office',
      descripcion: 'Una comedia sobre la vida diaria de trabajadores de oficina.',
      imagen: 'assets/icon/series/office.webp',
      calificacion: 4.7
    },
    {
      titulo: 'Game of Thrones',
      descripcion: 'Una lucha épica por el trono en un mundo fantástico.',
      imagen: 'assets/icon/series/gameof.jpg',
      calificacion: 4.6
    },
  ];
  populares = [
    {
      titulo: 'Stranger Things',
      imagen: 'assets/icon/series/stranger things.jpg',
      calificacion: 5.0,
    },
    {
      titulo: 'The Night Agent',
      imagen: 'assets/icon/series/agent.webp',
      calificacion: 4.7,
    },
    {
      titulo: 'Bridgerton',
      imagen: 'assets/icon/series/bridgerton.webp',
      calificacion: 4.5,
    },
    {
      titulo: 'The Crown',
      imagen: 'assets/icon/series/crown.webp',
      calificacion: 4.6,
    },
    {
      titulo: 'La Casa de Papel',
      imagen: 'assets/icon/series/papel.jpg',
      calificacion: 4.8,
    },
  ];

  romanticas = [
    {
      titulo: 'Emily en París',
      imagen: 'assets/icon/series/emily.jpg',
      calificacion: 4.1,
    },
    {
      titulo: 'Outlander',
      imagen: 'assets/icon/series/outlander.webp',
      calificacion: 4.3,
    },
  ];

  terror = [
    {
      titulo: 'Marianne',
      imagen: 'assets/icon/series/mari.webp',
      calificacion: 4.2,
    },
    {
      titulo: 'The Haunting of Hill House',
      imagen: 'assets/icon/series/house.jpg',
      calificacion: 4.6,
    },
  ];
}
