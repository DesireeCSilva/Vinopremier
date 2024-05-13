# Vinopremier 🍷🍇
Este proyecto ha sido desarrollado para la empresa Vinopremier, una empresa que nace en Segovia como una tienda online en el 2008. Ofrece una experiencia a través de un catálogo de referencia, Catas formativas, degustaciones y un servicio de venta online, tanto en España como a nivel internacional. El proyecto ha sido construido respetando la imagen corporativa de la empresa, con el objetivo de mejorar la experiencia del usuario. Nuestro trabajo ha consistido en: 
* Mejoras en la visualización de la screen de las Catas: se ha rediseñado la pantalla de Catas y Eventos, modificando las cards y el filtrado por ciudades, para proporcionar una experiencia más atractiva e intuitiva para el usuario.
* Sistema de gestión de reserva de Catas: el usuario puede explorar y reservar fácilmente Catas disponibles en Vinopremier gracias a la implementación de un calendario funcional. Ha sido diseñada para facilitar la reserva de Catas en línea, y hacer más llevadera la gestión de las mismas. 
* Filtrado de Catas mejorado: se han ideado e implementado mejoras en el sistema de filtrado de Catas, para ayudar al usuario a encontrar las Catas que mejor se adapten a sus preferencias y necesidades.
* Mejoras en la página de detalle de cada Cata: se ha rediseñado la screen mostrando los datos a través de iconos y una card informativa, incluyendo el mencionado calendario y organizando los componentes de una forma más adecuada para la experiencia de usuario.
* Elaboración de formularios de creación, edición y borrado de Catas para la parte del Admin: siempre con el objetivo de hacer más fácil el trabajo del equipo de Vinopremier.


# Index

+ [Descripción](#descripcion)
+ [Configuración del proyecto](#configuracion-proyecto)
+ [Inicialización del Postman](#initialización-postman)
+ [Tests](#tests)
+ [Estructura del proyecto](#estructura-proyecto)
+ [Tecnologías](#tecnologias)
+ [Autoras](#autoras)
+ [Próximos pasos](#proximos-pasos)
+ [Contribuciones](#contribuciones)

# Descripción
El proyecto se ha construido con dos roles: administrador y usuario. Disponemos de sesiones de usuario cifradas con nombre de usuario y contraseña. Por un lado, el *admin* puede crear, eliminar, editar y ver las Catas, así como gestionar el Sistema de reservas y el calendario. Por otro lado, el *usuario* puede explorar las Catas y añadirlas al carrito de compra si está interesado en ella.


# Configuración del proyecto

### Clona el Repositorio
 ```bash
git clone https://github.com/SarayAnta/VINO-PREMIER.git
```
##### Para entrar a la carpeta del repositorio
```bash
cd VINO-PREMIER
```
**** 
## Para la parte del Front-end, debes seguir los siguientes pasos:
##### Primero entra a la carpeta
```bash
cd client
```

##### Para instalar todas las dependencias del Front-end, copia la siguiente línea
 ```bash
npm i
```

##### Para hacer funcionar el servidor
```bash
npm run dev
```

##### Esto iniciará el servidor __http://localhost:5173__ usando Vite con React.

****
## Para la parte del Back-end, debes seguir los siguientes pasos:
### .env:
* Primero crea el archivo __.env__ situado en la carpeta _server_.
* Copia la información existente en _.env_example_ y rellénala con tus datos personales.

### Comencemos con MySQL Workbench

Si ya tiene configurado su entorno Workbench, podemos crear una __Base de datos__.
<br> Para hacer esto, pegue el siguiente comando en la hoja de Workbench:
```sql
CREATE DATABASE vino_premier;
```
#### Una vez que tengamos nuestra Base de Datos creada, podemos proceder con los siguientes comandos.
 
##### Primero entra a la carpeta
```bash
cd server
```

##### Para instalar todas las dependencias de Backend, copia la siguiente línea
 ```bash
npm i
```

##### Para hacer funcionar el servidor
```bash
npm run dev
```

##### Esto iniciará la conexión a la base de datos en Workbench.

****

# Tests
### Para esta parte tienes que seguir los siguientes pasos:
##### Primero entra a la carpeta
```bash
cd server
```

##### Para instalar todas las dependencias de prueba, copia la siguiente línea
 ```bash
npm i
```

##### Copia el código para iniciar el Jest Server
```bash
npm run test
```

##### Esto ejecutará los tests.

****

# Initialización del Postman
Haga clic en este enlace para obtener información de nuestro Postman sobre los métodos del CRUD en nuestra base de datos. Puede ver, agregar, editar y eliminar las Catas de nuestro sitio web en él.<br>
https://albamartinmz.postman.co/workspace/My-Workspace~1d37aef0-5e05-4f4d-8aa0-e702b0ca00bc/collection/32563763-1112c32c-0d93-4046-a71e-6813616cd5b7?action=share&creator=32563763



# Estructura del proyecto
Hemos construido el ecosistema de carpetas para nuestro proyecto en el Front-end y Back-end de forma ordenada y metódica. Hemos dividido el proyecto en dos carpetas llamadas _client_ y _server_, y en cada una de ellas hemos organizado los archivos apropiadamente para el correcto comportamiento y funcionamiento del repositorio. Vamos a mencionar los más importantes.

En la carpeta _client_: 
* __node_modules:__ contiene todas las dependencias del proyecto. Cuando instalamos paquetes usando npm, se almacenan aquí.
* __db_server:__ juega un papel crucial para garantizar el correcto funcionamiento y la seguridad del servidor de la base de datos.
* __src:__ aquí es donde reside el código fuente de la aplicación React. Normalmente contiene las siguientes subcarpetas:
1. *components:* son literalmente los componentes React reutilizables que conforman la interfaz de usuario de nuestra aplicación. Cada carpeta del componente contiene subcarpetas de estilos o archivos CSS.
2. *pages:* contiene diferentes páginas de nuestra aplicación compuestas con los componentes de React que requieren renderizar.
3. *assets:* contiene activos estáticos como imágenes, fuentes u otros archivos multimedia utilizados en la app.
4. *services:* contiene módulos para interactuar con servicios externos o API, en este caso archivos de JavaScript.
5. *layout:* define la estructura principal de la página incluyendo el header, footer y el contenido principal.
6. *router:* define las diversas rutas o endpoints disponibles en la API o el servidor web de la aplicación.

En la carpeta _server_: 
* __controllers__: para manejar solicitudes HTTP.
* __database__: configuración de conexiones con la base de datos.
* __helpers__: contiene las validaciones de importación y exportación de express-validator.
* __interfaces__: define estructuras de datos para una comunicación consistente.
* __middlewares__: maneja el procesamiento de solicitudes y controla el flujo.
* __models__: contiene los modelos de Booking, Events, Location y User.
* __utils__: proporciona funcionalidades reutilizables.
* __validators__: contiene las validaciones de Booking, Events, Location y User.
* __routes__: organiza las definiciones de los endpoints de la API.


# Technologies
<img width="40" src="https://cdn.worldvectorlogo.com/logos/trello.svg">&nbsp;
<img width="40" src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg">&nbsp;
<img width="40" src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-plain.svg" >&nbsp;
<img width="40" src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain.svg" >&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" >&nbsp;
<img width="40" src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" >&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="react" alt="react" width="40" height="40"/>&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" >&nbsp;
<img width="40" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png">&nbsp;
<img width="40" src="https://media.licdn.com/dms/image/C560BAQHQH8_cFFK_3A/company-logo_200_200/0/1630606810347/drawsql_logo?e=2147483647&v=beta&t=aWOh8DYdF-g2BWxZPlX4b3vXC2Omo0TOSxqO0JHKvws">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png">&nbsp;
<img width="40" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png">&nbsp;
<img width="40" src="https://cdn.worldvectorlogo.com/logos/nodemon.svg">&nbsp;
<img width="40" src="https://express-validator.github.io/img/logo.svg">&nbsp;
<img width="40" src="https://static-00.iconduck.com/assets.00/sequelize-original-icon-885x1024-r8dswyvj.png">&nbsp;


# Authors
 - Scrum Master: [Fátima Cosme](https://github.com/pointfs)
 - Product Owner: [Andrea Martín](https://github.com/Andreamartinn17)
 - Web Developer: [Desirée Carrizosa](https://github.com/DesireeCSilva)
 - Web Developer: [Alba Martín](https://github.com/albamartinmz)
 - Web Developer: [Saray Anta](hhttps://github.com/SarayAnta)


# Póximos pasos
En este proyecto final de nuestro Bootcamp en Factoría F5 hemos contado con un tiempo determinado, pero tenemos algunas ideas más para seguir mejorando esta website. Algunas de ellas son:

* Mejorar la calidad de algunos textos de detalle de las Catas, jugando mejor con el posicionamiento SEO.
* Crear una navegación más intuitiva para que la experiencia de usuario sea óptima.
* En la Side-Bar, afinar los filtros para que las Catas mostradas sean exactamente lo que el usuario busca.

# Contributions
¡Las contribuciones son siempre bienvenidas! Si encuentras algún problema o tienes sugerencias para mejorar nuestro repositorio, realiza un _pull request_.
   
**[⬆️ Volver al índice](#index)**