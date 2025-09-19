1. Mostrar saludo
   Descripción:
   Crear un input para ingresar un nombre.
   Crear un input para ingresar un edad.
   Un botón que al hacer click cree un objeto persona y muestre "Hola, soy... y tengo... años."

// Resultado
// "Hola, soy Jaimito y tengo 23 años."

2. Crear un objeto Auto y mostrarlo
   Descripción:
   Crear un objeto Auto con las siguientes propiedades:
   color
   marca
   modelo
1. Ingresar los datos con inputs y un botón.
1. Mostrar los datos en un <p><strong>...</strong></p> al hacer click.

1. Filtrar autos por color
   Descripción:
   Dado un array de autos:
   Crear un input para ingresar un color
   Filtrar un array de autos y mostrar los que coinciden al presionar un botón

const autos = [
{ marca: "Toyota", modelo: "Etios", color: "gris" },
{ marca: "Ford", modelo: "Focus", color: "negro" },
{ marca: "Chevrolet", modelo: "Onix", color: "blanco" },
{ marca: "Renault", modelo: "Clio", color: "gris" },
{ marca: "Volkswagen", modelo: "Golf", color: "verde" },
{ marca: "Peugeot", modelo: "208", color: "azul" },
{ marca: "Honda", modelo: "Civic", color: "rojo" },
{ marca: "Fiat", modelo: "Palio", color: "gris" },
{ marca: "Nissan", modelo: "Versa", color: "gris" },
{ marca: "Hyundai", modelo: "i30", color: "plateado" },

javaScript VI.md 2025-09-18

2 / 2

];

// Autos encontrados de color "gris":
┌─────────┬───────────┬───────────┬────────┐
│ (index) │ marca │ modelo │ color │
├─────────┼───────────┼───────────┼────────┤
│ 0 │ 'Toyota' │ 'Etios' │ 'gris' │
│ 1 │ 'Renault' │ 'Clio' │ 'gris' │
│ 2 │ 'Fiat' │ 'Palio' │ 'gris' │
└─────────┴───────────┴───────────┴────────┘

4. Mostrar una lista de autos de marca Fiat
   Descripción:
   Agregar cada modelo a una lista <ul> dinámica.

// Resultado:
// Modelos de autos marca Fiat:
// • Palio
// • Cronos
// • Mobi
// • Uno

5. Cambiar color de fondo y guardarlo
   Descripción:
   Usar <input type="color"> para elegir un color.
   Cambiar el color de fondo del sitio al seleccionar.
   Guardar el color en localStorage.

6. Usar .map() para crear una lista en el DOM
   Descripción:
   Crear un array de nombres
   Usar .map() para transformar cada nombre en un <li>
   Insertar esos <li> en un <ul>

7. Usar .some() para verificar si hay mayores de edad
   Descripción:
   Mostrar en un <h2> si hay al menos una persona mayor de 30 años.
