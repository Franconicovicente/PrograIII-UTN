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

console.log(`El producto con id 3 esta en la posicion ${productoIndex3}`);

const valorTotalInventario = productos.reduce(
  (acumulador, productos) => acumulador + productos.precio * productos.stock,
  0
);

console.log(valorTotalInventario);

const estudiantes = [
  { id: 1, nombre: "Ana", edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: "Carlos", edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: "María", edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: "Juan", edad: 19, calificaciones: [7, 6, 5, 8] },
];

estudiantes.forEach((estudiante) => {
  console.log(
    `Nombre estudiante: ${estudiante.nombre}, edad: ${estudiante.edad}`
  );
});

const promedioNotas = estudiantes.map((estudiante) => {
  const suma = estudiante.calificaciones.reduce(
    (acumulador, nota) => acumulador + nota,
    0
  );
  const promedio = suma / estudiante.calificaciones.length;
  return { nombre: estudiante.nombre, promedio }; // Spread Operator. Copia todas las propiedades del objeto estudiante (nombre, calificaciones, etc.).
  // Agrega una nueva propiedad llamada promedio con el valor que le pases.
});

console.log("Promedio notas: ", promedioNotas);

const filtroPromedio = promedioNotas.filter(
  (estudiante) => estudiante.promedio > 7.5
);

console.log("Estudiantes con promedio mayor a 7.5", filtroPromedio);

const estudianteFiltro = estudiantes.findIndex(
  (estudiante) => estudiante.nombre === "María"
);

console.log(
  "Estudiante de nombre María encontrado en el indice: " + estudianteFiltro
);

const edadPromedio = estudiantes.reduce(
  (acumulador, estudiante) => acumulador + estudiante.edad / estudiantes.length,
  0
);

console.log("Edad promedio ", +edadPromedio);

const peliculas = [
  {
    id: 1,
    titulo: "El Padrino",
    año: 1972,
    duracion: 175,
    genero: "drama",
    rating: 9.2,
  },
  {
    id: 2,
    titulo: "Pulp Fiction",
    año: 1994,
    duracion: 154,
    genero: "crimen",
    rating: 8.9,
  },
  {
    id: 3,
    titulo: "El Señor de los Anillos",
    año: 2001,
    duracion: 178,
    genero: "fantasía",
    rating: 8.8,
  },
  {
    id: 4,
    titulo: "Interestelar",
    año: 2014,
    duracion: 169,
    genero: "ciencia ficción",
    rating: 8.6,
  },
  {
    id: 5,
    titulo: "Parásitos",
    año: 2019,
    duracion: 132,
    genero: "drama",
    rating: 8.6,
  },
];

peliculas.forEach((pelicula) =>
  console.log(`Nombre peli: ${pelicula.titulo}, anio: ${pelicula.año}`)
);

const pelisCapitalize = peliculas.map((pelicula) => {
  return (
    pelicula.titulo.charAt(0).toUpperCase() +
    pelicula.titulo.slice(1).toLowerCase()
  );
});

console.log(pelisCapitalize);

const peliculasDrama = peliculas.filter(
  (pelicula) => pelicula.genero === "drama" && pelicula.rating > 8.5
);

console.log(
  "Pelis con rating mayor a 8.5: " +
    peliculasDrama.map((p) => p.titulo).join(", ")
);

const peliEstrenada = peliculas.find((pelicula) => pelicula.año === 2014);

if (peliEstrenada) {
  console.log("Nombre de la peli estrenada en 2014: " + peliEstrenada.titulo);
} else {
  console.log("No hay pelicula del 2014");
}
