import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage {
  resenas = [
    {
      titulo: 'Juan Pérez',
      texto: '¡Excelente app para ver películas!',
      calificacion: 5
    },
    {
      titulo: 'Ana López',
      texto: 'Muy fácil de usar y con buenas recomendaciones.',
      calificacion: 4
    },
    {
      titulo: 'Carlos Gómez',
      texto: 'Me gustaría que tuviera más series.',
      calificacion: 3
    }
  ];
  

  constructor() {}
}



