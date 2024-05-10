# Vinopremier 🍷🍇
Este proyecto ha sido desarrollado para la empresa Vinopremier, una empresa que nace en Segovia como una tienda online en el 2008. Ofrece una experiencia a través de un catálogo de referencia, Catas formativas, degustaciones y un servicio de venta online, tanto en España como a nivel internacional. El proyecto ha sido construido respetando la imagen corporativa de la empresa, con el objetivo de mejorar la experiencia del usuario. Nuestro trabajo ha consistido en: 
* Mejoras en la visualización de la screen de las Catas: se ha rediseñado la pantalla de Catas y Eventos, modificando las cards y el filtrado por ciudades, para proporcionar una experiencia más atractiva e intuitiva para el usuario.
* Sistema de gestión de reserva de Catas: el usuario puede explorar y reservar fácilmente Catas disponibles en Vinopremier gracias a la implementación de un calendario funcional. Ha sido diseñada para facilitar la reserva de Catas en línea, y hacer más llevadera la gestión de las mismas. 
* Filtrado de Catas mejorado: se han ideado e implementado mejoras en el sistema de filtrado de Catas, para ayudar al usuario a encontrar las Catas que mejor se adapten a sus preferencias y necesidades.
* Mejoras en la página de detalle de cada Cata: se ha rediseñado la screen mostrando los datos a través de iconos y una card informativa, incluyendo el mencionado calendario y organizando los componentes de una forma más adecuada para la experiencia de usuario.
* Elaboración de formularios de creación, edición y borrado de Catas para la parte del Admin: siempre con el objetivo de hacer más fácil el trabajo del equipo de Vinopremier.


# Index

+ [Descripcion](#descripcion)
+ [Configuración del proyecto](#configuracion-proyecto)
+ [Inicialización del Postman](#initialización-postman)
+ [Tests](#tests)
+ [Estructura del proyecto](#estructura-proyecto)
+ [Tecnologías](#tecnologias)
+ [Autoras](#autoras)
+ [Próximos pasos](#proximos-pasos)
+ [Contribuciones](#contribuciones)

# Descripcion
The project has been built with two roles: admin and user. We have encrypted user sessions with username and password. On the one hand the *admin* is able to create, delete, edit and view news articles, and on the other hand the *user* can browse articles and also can use the like button which increment the news they really love.


# Configuración del proyecto

### Clone the Repository
 ```bash
git clone https://github.com/pointfs/NEWSPAPER.git
```
##### To enter the repository folder
```bash
cd NEWSPAPER
```
**** 
## For the Frontend, you have to follow the next steps:
##### First enter into the folder
```bash
cd client
```

##### For install all dependencies of Frontend, copy the next line
 ```bash
npm i
```

##### Make the server run
```bash
npm run dev
```

##### This will start the server __http://localhost:5173__ using Vite with React.

****
## For the Backend, you have to follow the next steps:
### .env:
* First create the file __.env__ located in the folder _server_.
* Copy the information placed on _.env_example_ and fill it with your personal data.

### Let's get started with MySQL Workbench.

If you already have your Workbench environment set up, we can create a __Database:__
<br> To do this, paste the following command into the Workbench sheet
```sql
CREATE DATABASE tech_today;
```
#### Once we have our Database created, we can proceed with the next commands.
 
##### First enter into the folder
```bash
cd server
```

##### For install all dependencies of Backend, copy the next line
 ```bash
npm i
```

##### Make the server run
```bash
npm run dev
```

##### This will start the connection to the Database on Workbench.

****

# Tests
### For this part you have to follow the next steps:
##### First enter into the folder
```bash
cd server
```

##### For install all Test dependencies, copy the next line
 ```bash
npm i
```

##### Copy code to start the Jest Server
```bash
npm run test
```

##### This will run the tests.

****

# Initialización del Postman
Click on this link to obtain our Postman information about the methods of the CRUD in our database. You can view, add, edit, and delete the articles of our website on it.<br>
https://albamartinmz.postman.co/workspace/My-Workspace~1d37aef0-5e05-4f4d-8aa0-e702b0ca00bc/collection/32563763-1112c32c-0d93-4046-a71e-6813616cd5b7?action=share&creator=32563763




# Estructura del proyecto
We have built the folder ecosystem for our project in the Front-end and Back-end in an orderly and methodical way. We have divided the project in two folders called _client_ and _server_, and we have organized the files in each one correctly for the proper behaviour and understanding of the repository. We are going to mention the most important ones.

On the _client_ folder: 
* __node_modules:__ contains all the dependencies of your project. When you install packages using npm, they are stored here.
* __db_server:__ plays a crucial role in ensuring the proper functioning and security of the database server.
* __src:__ this is where the source code of your React application resides. It typically contains the following subfolders:
1. *components:* contains reusable React components that make up our application's UI. Each component folder contains the subfolders of styles, CSS files or preprocessor files for styling your components.
2. *pages:* contains React components that represent different pages of our application.
3. *assets:* holds static assets like images, fonts, or other media files used in your application.
4. *services:* contains modules for interacting with external services or APIs, in this case an archive of JavaScript.
5. *context:* contains information about the context or environment in which the application operates.
6. *routes:* defines the various routes or endpoints available in the application's API or web server.

On the _server_ folder: 
* __controllers:__ to handle HTTP requests.
* __database:__ configuration of connections with the database.
* __helpers:__ contains the import and export validations from express-validator.
* __interfaces__: define data structures for consistent communication.
* __middlewares:__ handle request processing and control flow.
* __models:__ contains the models of the News and User.
* __utils:__ provide reusable functionalities.
* __validators:__ contains the validations of the News and User.
* __routes:__ organize API endpoint definitions.


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
 - Scrum Master: [Leite L.](https://github.com/leiteway)
 - Product Owner: [Fátima Cosme](https://github.com/pointfs)
 - Web Developer: [Desirée Carrizosa](https://github.com/DesireeCSilva)
 - Web Developer: [Alba Martín](https://github.com/albamartinmz)
 - Web Developer: [Kristy Neiras](https://github.com/krisneiras)


# Next Steps
In our team we have several goals to meet and we are going to list them. We are working on improving our project and we have it under construction:
* The like button: in the future this button will be able to add the user's favorite news to another page
* The search bar: we will make this bar useful to search for keywords of the news that we want to see
* On the SideBar: the profile icon doesn´t have functionality, and we want to develop a profile screen to our users
* On the app in general: we will develop that the administrator can manage the roles of the users

# Contributions
Contributions are welcome! If you find any problems or have suggestions for improvement, please create an issue or make a pull request.
   
**[⬆️ Back to Index](#index)**