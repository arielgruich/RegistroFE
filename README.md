# Angular Material Dashboard

[![Join the chat at https://gitter.im/flatlogic/angular-material-dashboard](https://badges.gitter.im/flatlogic/angular-material-dashboard.svg)](https://gitter.im/flatlogic/angular-material-dashboard?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Dashboard responsivo basado en Angular y material design basado es:
[Angular Material](https://github.com/angular/material).

![minedu_portal](src/assets/images/minedu_portal.jpg)
## Empezando

Clone project:

    $ git clone https://github.com/flatlogic/angular-material-dashboard.git

Instalar Dependencias:

    $ cd angular-material-dashboard
    $ npm install
    $ npm install angular-soap

Servidor en modo Dev:

    $ gulp serve

## Caracteristicas

* AngularJS
* Angular UI Router
* Angular Material
* Sass styles
* Gulp build
* Stylish, clean, responsive layout with original design
* BrowserSync for the ease of development

## Nota

* Tome en cuenta que el archivo .bowerrc, esta configurado para proxy
* Si no tiene un proxy debe contenener solo la linea:
* "directory": "bower_components"

## Deploy de las paginas

    $ gulp build
    $ gulp deploy
