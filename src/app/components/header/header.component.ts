import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  usuario: string | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const guardado = localStorage.getItem('usuario');
    this.usuario = guardado && guardado.trim() !== '' ? guardado : null;  // ✅ Evita falsos positivos
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    localStorage.removeItem('usuarioId');
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); // Recarga la página después de cerrar sesión
    });
  }
}
