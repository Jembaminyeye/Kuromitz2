# Kuromitz - Proyecto Web y Móvil

Plataforma de recomendación de películas y series desarrollada con Ionic + Angular (frontend) y Node.js + Express (backend), con autenticación JWT y consumo de API REST.

## Presentado por:

Benjamin Rodriguez, Ignacio Layana, Javier Morales, Sebastián rojas y Sean Jamen

Entrega Parcial 2 - Incluye integración completa frontend-backend.

# Ejecución del proyecto

## Cómo ejecutar

### Backend

1. Ir a la carpeta `backend`
2. Ejecutar `npm install`
3. Asegúrate de tener las dependencias necesarias:
   ```bash
   npm install bcryptjs cors xss mysql2 express
   ```
4. Crear archivo `.env` con configuración de DB si se usa
5. Ejecutar `node app.js`

### Frontend

1. Ir a la carpeta `src/`
2. Ejecutar `npm install`
3. Ejecutar `ionic serve`

# Tecnologías usadas

- Frontend: Ionic + Angular
- Backend: Node.js + Express
- Base de datos: MySQL
- Autenticación: Local + bcryptjs
- Seguridad: CORS, XSS (`xss`), Inyección SQL prevenido con prepared statements
- Herramientas: Postman, Visual Studio Code
