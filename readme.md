# Kuromitz, Aplicación recomendadora de películas y series.

## Presentado por:

Benjamin Rodriguez, Ignacio Layana, Javier Morales, Sebastián rojas y Sean Jamen

# Entrega Parcial 2: Diseño y Estructura inicial

### Objetivo: Definir el diseno de la aplicación y construir la estructura del frontend en Ionic+ Angular

# Ejecución del proyecto

### 1. Descargar el zip del proyecto y extraer los archivos

### 2. Configuración de la Base de Datos

2.1. Instala MySQL en tu computador.
2.2. Crea la base de datos y las tablas necesarias ejecutando el siguiente script en tu cliente MySQL (por ejemplo, MySQL Workbench o terminal):

```sql
CREATE DATABASE kuromitz;
USE kuromitz;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(100) NOT NULL,
  rut VARCHAR(20) NOT NULL UNIQUE,
  correo VARCHAR(100) NOT NULL UNIQUE,
  contraseña VARCHAR(255) NOT NULL
);

CREATE TABLE resenas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  genero VARCHAR(50),
  duracion INT,
  estrellas VARCHAR(10),
  puntuacion INT,
  descripcion TEXT,
  etiquetas VARCHAR(255),
  autor_id INT,
  FOREIGN KEY (autor_id) REFERENCES usuarios(id)
);

CREATE TABLE mi_lista (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  imagen VARCHAR(255),
  calificacion FLOAT,
  fecha_agregado DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

2.3. Configura la conexión a la base de datos en el archivo backend/db.js:
const connection = mysql.createConnection({
     host: 'localhost',
  user: 'TU_USUARIO',
  password: 'TU_CONTRASENA',
  database: 'kuromitz',
  port: 3306
});


### 3. Levantar el backend
3.1 Abre una terminal y navega a la carpeta backend:
    cd backend
3.2 Instala las dependencias:
    npm install
3.3 Inicia el servidor en backend
    node app.js


### 4. Levantar el frontend
4.1 Abre otra terminal y navega a la carpeta raíz del proyecto.
4.2 Instala las dependencias:
    npm install
4.3 Inicia el frontend:
    ionic serve
    

# Más información técnica sobre el proyecto [aquí](https://github.com/Jembaminyeye/Kuromitz2/blob/master/readme.md)