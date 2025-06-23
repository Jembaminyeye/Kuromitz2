import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service'; // importa tu servicio

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  correo: string = '';
  contrasena: string = '';

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit() {}

  login() {
    this.api.login(this.correo, this.contrasena).subscribe({
      next: (respuesta) => {
        alert('✅ Sesión iniciada con éxito');
        localStorage.setItem('usuario', respuesta.usuario);
        localStorage.setItem('usuarioId', respuesta.id);
        localStorage.setItem('token', respuesta.token); // <-- Guarda el token aquí
        this.router.navigate(['/home']).then(() => {
          window.location.reload(); // Recarga la página después de navegar
        });
      },
      error: (err) => {
        console.error('❌ Error en login:', err);
        alert(err.error?.error || 'Fallo en login');
      }
    });
  }
}
