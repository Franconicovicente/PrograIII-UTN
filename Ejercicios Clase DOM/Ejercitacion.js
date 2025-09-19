function calcularAreaRectangulo(longitud, ancho) {
  return longitud * ancho;
}

console.log(calcularAreaRectangulo(5, 3));

function contarPalabras(cadena) {
  return cadena.trim().split(/\s+/).length;
}

console.log(contarPalabras("Humahuaca es un lugar copado"));

function contarVocales(cadena) {
  let coincidencias = cadena.match(/[a,i,u,e,o]/gi);
  return coincidencias ? coincidencias.length : 0;
}

console.log(contarVocales("JavaScript"));

// function edadCanina() {
//   let edadPerro = prompt("Introduzca la edad de su perro.");

//   let aniosHumanos = edadPerro * 7;

//   return aniosHumanos;
// }

// console.log(`Su perro tiene ${edadCanina()} anios`);

function capitalizarPalabras(palabra) {
  //Uso de map! preguntar
  return palabra
    .split(" ")
    .map(
      (palabra) =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )
    .join(" ");
}

console.log(capitalizarPalabras("hola que tal como te va"));

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    stock: 15,
    categoria: "electrónica",
  },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50, categoria: "electrónica" },
  { id: 3, nombre: "Teclado", precio: 45, stock: 30, categoria: "electrónica" },
  {
    id: 4,
    nombre: "Monitor",
    precio: 300,
    stock: 20,
    categoria: "electrónica",
  },
  { id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "libros" },
];

productos.forEach((producto) => {
  console.log(
    `Nombre del producto con id ${producto.id} ${producto.nombre} y con un precio de ${producto.precio} ARS`
  );
});

const nombresProductos = productos.map((producto) => {
  console.log(`Nombre del producto desde un .map: ${producto.nombre}`);
});

const stockProductos = productos.filter((producto) => producto.stock > 20);

console.log(stockProductos);

const productoIndex3 = productos.findIndex((producto) => producto.id === 3);

console.log(productoIndex3);
