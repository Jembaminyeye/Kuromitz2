import { Component } from '@angular/core';
import { MiListaService } from '../mi-lista/mi-lista.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
  standalone: false,
})

export class PeliculasPage {
  constructor(
    private listaService: MiListaService,
    private toastController: ToastController
  ) {}
  peliculas = [
  {
    titulo: 'MINIONS',
    descripcion: 'Los minions buscan un nuevo villano al que servir y terminan conociendo a su mayor ídolo: Scarlet Overkill.',
    imagen: 'assets/icon/pelis/183973.webp',
    calificacion: 5.0
  },
  {
    titulo: 'Minecraft',
    descripcion: 'Una aventura épica inspirada en el popular videojuego, donde los héroes deben salvar su mundo cúbico de una amenaza peligrosa.',
    imagen: 'assets/icon/pelis/375_375.jpeg',
    calificacion: 4.1
  },
  {
    titulo: 'Que pasó ayer',
    descripcion: 'Tras una noche de fiesta en Las Vegas, tres amigos intentan reconstruir lo ocurrido mientras buscan a su amigo desaparecido.',
    imagen: 'assets/icon/pelis/images.jfif',
    calificacion: 4.9
  },
  {
    titulo: 'Batman',
    descripcion: 'Bruce Wayne se enfrenta a su pasado y a un nuevo enemigo que amenaza con desatar el caos en Ciudad Gótica.',
    imagen: 'assets/icon/pelis/batman.jpg',
    calificacion: 4.5
  },
];

  populares = [
  {
    titulo: 'Dune 2',
    imagen: 'assets/icon/pelis/dune2.webp',
    descripcion: 'Paul Atreides se une a los Fremen en su lucha por vengar a su familia en el planeta Arrakis.',
    calificacion: 5.0,
  },
  {
    titulo: 'Godzilla x Kong',
    imagen: 'assets/icon/pelis/god.jpg',
    descripcion: 'Dos titanes se unen contra una amenaza oculta que pone en peligro a la humanidad.',
    calificacion: 4.8,
  },
  {
    titulo: 'The Fall Guy',
    imagen: 'assets/icon/pelis/fallguy.jpg',
    descripcion: 'Un doble de riesgo regresa a la acción para resolver un misterio en el set de filmación.',
    calificacion: 4.7,
  },
  {
    titulo: 'Civil War',
    imagen: 'assets/icon/pelis/civil.jpg',
    descripcion: 'Una visión distópica de Estados Unidos sumido en una guerra interna.',
    calificacion: 4.6,
  },
  {
    titulo: 'The Beekeeper',
    imagen: 'assets/icon/pelis/beekeeper.jpg',
    descripcion: 'Un exagente secreto busca venganza tras una tragedia personal.',
    calificacion: 4.5,
  },
];

romanticas = [
  {
    titulo: 'A todos los chicos de los que me enamoré',
    imagen: 'assets/icon/pelis/enamore.webp',
    descripcion: 'La vida de Lara Jean cambia cuando sus cartas de amor secretas se hacen públicas.',
    calificacion: 4.3,
  },
  {
    titulo: 'El stand de los besos',
    imagen: 'assets/icon/pelis/stand.jpg',
    descripcion: 'Una adolescente se enamora del hermano de su mejor amigo durante una feria escolar.',
    calificacion: 4.0,
  },
];

terror = [
  {
    titulo: 'El Conjuro',
    imagen: 'assets/icon/pelis/conjuro.jpg',
    descripcion: 'Investigadores paranormales ayudan a una familia aterrorizada por una presencia oscura.',
    calificacion: 4.5,
  },
  {
    titulo: 'It',
    imagen: 'assets/icon/pelis/it.jpg',
    descripcion: 'Un grupo de niños enfrenta a un mal antiguo que toma la forma de un payaso aterrador.',
    calificacion: 4.2,
  },
];

  async agregarAMiLista(pelicula: any) {
  const peliParaEnviar = {
    titulo: pelicula.titulo,
    descripcion: pelicula.descripcion || '',
    imagen: pelicula.imagen,
    calificacion: pelicula.calificacion,
  };

  this.listaService.addPelicula(peliParaEnviar).subscribe({
    next: async () => {
      const toast = await this.toastController.create({
        message: '🎉 Película agregada a tu lista.',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    },
    error: async (err) => {
      console.error('Error al agregar película:', err);
      const toast = await this.toastController.create({
        message: '❌ Error al agregar la película.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  });
}


  
}
