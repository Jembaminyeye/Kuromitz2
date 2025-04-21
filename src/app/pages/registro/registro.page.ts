import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private alertController: AlertController
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

    // Aquí podrías llamar a un servicio para registrar al usuario en el backend
    console.log('Usuario registrado:', this.usuario);

    // Redirigir a Home (puedes cambiarlo por otra ruta si quieres)
    this.router.navigate(['/home']);
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
