# Kuromitz, Aplicación recomendadora de películas y series.
# Presentado por:
* Benjamin Rodriguez
* Ignacio Layana
* Javier Morales
* Sebastián rojas
* Sean Jamen


#  Índice
1. Resumen del Proyecto
2. Requerimientos
3. Diseño de prototipo
4. Navegación y UX
5. Librerías  


# Resumen del Proyecto


La aplicación es una plataforma de recomendación de películas y series desarrollada con Ionic + Angular. Está diseñada para ofrecer a los usuarios una experiencia personalizada, permitiéndoles buscar, calificar, comentar y gestionar listas de contenido audiovisual. Además, incluye un sistema de administración para gestionar el contenido y moderar los comentarios.




# Requerimientos


## Roles del Sistema  


- Administrador: Control total sobre el contenido y comentarios.  
- Usuario: Puede interactuar con el contenido: buscar, puntuar, comentar, recomendar y crear listas.


## Requerimientos Funcionales por Rol


### Rol-Administrador


- RF-ADM-01: El administrador puede agregar nuevas películas y series.  
- RF-ADM-02: El administrador puede editar la información de películas y series.  
- RF-ADM-03: El administrador puede eliminar películas y series.  
- RF-ADM-04: El administrador puede eliminar comentarios ofensivos o inadecuados.


### Rol-Usuario


- RF-USR-01: El usuario puede calificar películas con una puntuación de 0 a 5 estrellas.  
- RF-USR-02: El usuario puede buscar películas y series por nombre, género o actores.  
- RF-USR-03: El usuario puede dejar comentarios en películas o series.  
- RF-USR-04: El usuario puede recomendar una película o serie a otro usuario.  
- RF-USR-05: El usuario puede crear listas personalizadas, como “Favoritas” o “Para ver después”.


---


## Requerimientos No Funcionales


- RNF-01: Compatibilidad Multiplataforma  
  - La aplicación debe ser funcional en dispositivos móviles Android, iOS y navegadores web modernos.


- RNF-02: Usabilidad  
  - El diseño debe ser intuitivo y amigable para usuarios de todas las edades.


- RNF-03: Escalabilidad  
  - El sistema debe ser capaz de soportar un creciente número de usuarios y contenidos sin pérdida notable de rendimiento.


- RNF-04: Rendimiento  
  - El sistema debe mostrar recomendaciones y resultados de búsqueda en menos de 2 segundos en el 95% de los casos.


- RNF-05: Seguridad
  - Los datos de usuario (historial, listas, recomendaciones) deben almacenarse y transmitirse de forma segura.


- RNF-06: Disponibilidad  
  - El sistema debe garantizar un tiempo de disponibilidad del 99%, minimizando caídas del servicio.


- RNF-07: Mantenibilidad del Código  
  - El código fuente del frontend debe seguir buenas prácticas para facilitar futuras actualizaciones.


# Prototipo de diseño

[Figma - Prototipo Kuromtz] ( https://www.figma.com/design/y2yN6VCd7flSzcSV7a1zcA/Dise%C3%B1oPrototipo?node-id=72-2484&t=s6PICz4Nu0cg8Hgo-1 )


# Navegación y ux
### Utilizaremos navegación por menú lateral (hamburger menu) y tabs inferiores para accesos rápidos. La app estará dividida en flujos diferenciados según el rol del usuario (Administrador o Usuario común).


Flujo de autenticación (ambos roles):
* Pantalla de inicio de sesión
* Pantalla de registro
* Redirección según rol tras login.

## Navegación por roles
* Usuario
* Administrador
  
## Experiencia de usuario (UX)
* Diseño centrado en el usuario final: Se prioriza el acceso rápido a recomendaciones, listas y funciones sociales.
* Interacciones fluidas: Feedback inmediato al calificar, comentar o buscar.
* Navegación clara: Botones visibles, íconos comprensibles, y navegación coherente.
* Responsividad: Adaptación a pantallas móviles y web sin pérdida de información.
* Accesibilidad: Contrastes correctos, tipografías legibles y botones grandes.

## Ejemplo flujo de uso (usuario)
1. El usuario abre la app y se registra o inicia sesión.
2. En la página de inicio ve recomendaciones personalizadas.
3. Usa la barra de búsqueda para encontrar una película.
4. Accede a su detalle, la califica y deja un comentario.
5. Decide agregarla a su lista “Favoritas”.
6. Desde el perfil, puede cerrar sesión o cambiar de dispositivo sin perder su información.

## Estructura de navegacion
### Diagrama de navegacion en carpeta " otros " 
en el diagrama tenemos un inicio de sesión que lleva a registro o directamente a home. Desde home, el usuario puede acceder a todas las pantallas principales: buscar, ver detalles, listas y perfil. Si el usuario es administrador, también puede navegar a Admin Dashboard (línea punteada anaranjada), donde está dividido en dos clústeres: usuario y administrador.

# Librerías del proyecto
* Ionic Framework
* Angular
* TypeScript

