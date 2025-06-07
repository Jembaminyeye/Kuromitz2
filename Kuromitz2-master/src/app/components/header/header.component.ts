import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  usuario: string | null = null;

  ngOnInit(): void {
    const guardado = localStorage.getItem('usuario');
    this.usuario = guardado && guardado.trim() !== '' ? guardado : null;  // ✅ Evita falsos positivos
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    location.reload();
  }
}
