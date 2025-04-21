import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasPage } from './peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasPageRoutingModule {}
