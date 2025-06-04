import { Component } from '@angular/core';
import { MiListaService } from '../mi-lista/mi-lista.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
  standalone: false,
})
export class SeriesPage {
  constructor(
    private listaService: MiListaService,
    private toastController: ToastController
  ) {}
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
    descripcion: 'Una serie de ciencia ficción y suspenso ambientada en los años 80.',
    calificacion: 5.0,
  },
  {
    titulo: 'The Night Agent',
    imagen: 'assets/icon/series/agent.webp',
    descripcion: 'Un agente del FBI se ve envuelto en una conspiración.',
    calificacion: 4.7,
  },
  {
    titulo: 'Bridgerton',
    imagen: 'assets/icon/series/bridgerton.webp',
    descripcion: 'Una serie romántica ambientada en la era de la regencia inglesa.',
    calificacion: 4.5,
  },
  {
    titulo: 'The Crown',
    imagen: 'assets/icon/series/crown.webp',
    descripcion: 'La historia del reinado de la reina Isabel II.',
    calificacion: 4.6,
  },
  {
    titulo: 'La Casa de Papel',
    imagen: 'assets/icon/series/papel.jpg',
    descripcion: 'Un grupo de criminales lleva a cabo el atraco perfecto.',
    calificacion: 4.8,
  },
];


  romanticas = [
  {
    titulo: 'Emily en París',
    imagen: 'assets/icon/series/emily.jpg',
    descripcion: 'Una joven ejecutiva de marketing se muda a París para ofrecer una perspectiva estadounidense.',
    calificacion: 4.1,
  },
  {
    titulo: 'Outlander',
    imagen: 'assets/icon/series/outlander.webp',
    descripcion: 'Una enfermera de guerra viaja misteriosamente en el tiempo al siglo XVIII en Escocia.',
    calificacion: 4.3,
  },
];

terror = [
  {
    titulo: 'Marianne',
    imagen: 'assets/icon/series/mari.webp',
    descripcion: 'Una novelista de terror descubre que sus historias se hacen realidad.',
    calificacion: 4.2,
  },
  {
    titulo: 'The Haunting of Hill House',
    imagen: 'assets/icon/series/house.jpg',
    descripcion: 'Una familia se enfrenta a los fantasmas del pasado y de una mansión embrujada.',
    calificacion: 4.6,
  },
];

  async agregarAMiLista(serie: any) {
    const serieParaEnviar = {
      titulo: serie.titulo,
      descripcion: serie.descripcion || '',
      imagen: serie.imagen,
      calificacion: serie.calificacion,
    };

    this.listaService.addPelicula(serieParaEnviar).subscribe({  // Puedes cambiar el nombre si prefieres "addSerie"
      next: async () => {
        const toast = await this.toastController.create({
          message: '🎉 Serie agregada a tu lista.',
          duration: 2000,
          color: 'success'
        });
        toast.present();
      },
      error: async (err) => {
        console.error('Error al agregar serie:', err);
        const toast = await this.toastController.create({
          message: '❌ Error al agregar la serie.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    });
  }
}
