import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MiListaPageRoutingModule } from './mi-lista-routing.module';
import { MiListaPage } from './mi-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiListaPageRoutingModule
  ],
  //declarations: [MiListaPage]
})
export class MiListaPageModule {}
