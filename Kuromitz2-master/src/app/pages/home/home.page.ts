import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  resenas = [
    {
      nombre: 'Ignacia Layana',
      texto: 'Una obra maestra del cine moderno. La fotografía y la narrativa son excepcionales...'
    },
    {
      nombre: 'ShonFornite',
      texto: 'La mejor serie que he visto este año. Los personajes están muy bien desarrollados...'
    },
    {
      nombre: 'Matias Ruiz',
      texto: 'Una propuesta innovadora que rompe con los esquemas tradicionales del kpop...'
    }
  ];
}