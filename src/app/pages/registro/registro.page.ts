import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage {
  usuario = {
    nombre: '',
    rut: '',
    correo: '',
    region: '',
    comuna: '',
    contrasena: '',
    confirmarContrasena: '',
    aceptaTerminos: false
  };

  constructor(
    private router: Router,
    private alertController: AlertController,
    private usuarioService: UsuarioService
  ) {}

  async registrar() {
    const {
      nombre,
      rut,
      correo,
      region,
      comuna,
      contrasena,
      confirmarContrasena,
      aceptaTerminos
    } = this.usuario;

    if (
      !nombre || !rut || !correo || !region || !comuna ||
      !contrasena || !confirmarContrasena || !aceptaTerminos
    ) {
      this.mostrarAlerta('Por favor completa todos los campos y acepta los términos.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      this.mostrarAlerta('Las contraseñas no coinciden.');
      return;
    }

    // Llama al servicio para registrar el usuario en el backend
    this.usuarioService.registrar({
      usuario: nombre,
      rut,
      correo,
      region,
      comuna,
      contraseña: contrasena
    }).subscribe({
      next: (resp) => {
        this.mostrarAlerta('Usuario registrado con éxito.');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.mostrarAlerta(err.error?.error || 'Error al registrar usuario.');
      }
    });
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
