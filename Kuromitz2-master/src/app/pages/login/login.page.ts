import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  correo: string = '';
  contrasena: string = ''; // SIN ñ para evitar errores

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  login() {
    const datos = {
      correo: this.correo,
      contraseña: this.contrasena // Aquí sí va con ñ porque el backend lo espera así
    };

    this.http.post<any>('http://localhost:3000/usuarios/login', datos).subscribe({
      next: (respuesta) => {
        alert('✅ Sesión iniciada con éxito');
        localStorage.setItem('usuario', respuesta.usuario); // Guardar nombre
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('❌ Error en login:', err);
        alert(err.error?.error || 'Fallo en login');
      }
    });
  }
}
