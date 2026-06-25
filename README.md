# Tripleten web_project_around_es

## Descripción

Around The U.S. es una página web interactiva que muestra una galería de lugares. El proyecto permite editar la información del perfil, agregar nuevas tarjetas, marcar lugares como favoritos, eliminar tarjetas y abrir una vista ampliada de cada imagen.

El objetivo principal del proyecto es practicar la manipulación del DOM con JavaScript, el uso de formularios, eventos, templates HTML, ventanas emergentes y validación de formularios con JavaScript modular.

## Funcionalidad

- Renderizado de seis tarjetas iniciales mediante JavaScript.
- Edición del nombre y la descripción del perfil.
- Creación de nuevas tarjetas mediante un formulario.
- Inserción de nuevas tarjetas al inicio de la galería.
- Botón de "Me gusta" para cada tarjeta.
- Eliminación de tarjetas de la página.
- Apertura de una ventana emergente con la imagen ampliada y su título.
- Cierre de ventanas emergentes mediante el botón de cierre.
- Cierre de ventanas emergentes al hacer clic en la superposición.
- Cierre de ventanas emergentes al presionar la tecla Esc.
- Validación del formulario "Editar perfil".
- Validación del formulario "Nuevo lugar".
- Visualización de mensajes de error debajo de los campos inválidos.
- Desactivación del botón de envío cuando algún campo no pasa la validación.
- Restablecimiento del estado de validación al cerrar o abrir formularios.

## Validación de formularios

La validación se implementó utilizando atributos HTML5 y la propiedad `ValidityState` de JavaScript. La lógica de validación se encuentra separada en el archivo `scripts/validate.js` y se importa desde `scripts/index.js` usando JavaScript modular.

### Formulario "Editar perfil"

- El campo "Nombre" es obligatorio.
- El campo "Nombre" debe contener entre 2 y 40 caracteres.
- El campo "Acerca de mí" es obligatorio.
- El campo "Acerca de mí" debe contener entre 2 y 200 caracteres.

### Formulario "Nuevo lugar"

- El campo "Título" es obligatorio.
- El campo "Título" debe contener entre 2 y 30 caracteres.
- El campo "URL de la imagen" es obligatorio.
- El campo "URL de la imagen" debe contener una URL válida.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JavaScript modular
- DOM
- Validación de formularios
- Template HTML
- Metodología BEM
- Git y GitHub Pages

## Estructura del proyecto

```text
.
├── blocks/
├── images/
├── pages/
│   └── index.css
├── scripts/
│   ├── index.js
│   └── validate.js
├── vendor/
│   ├── fonts.css
│   └── normalize.css
├── index.html
└── README.md
```

## Enlace al proyecto

GitHub Pages: https://ja-ardila.github.io/web_project_around_es/

## Autor

Juan Andrés Ardila
