// Ejercicio uno. Mostrar saludo.
// let nombre = prompt("Ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su edad"));

let infoUsuario = document.getElementById("infoUsuario");
let salida = document.getElementById("salida");

infoUsuario.addEventListener("click", function () {
  salida.textContent = `Hola, soy ${nombre} y tengo ${edad} años. `;
});

// Ejercicio dos. Crear un objeto auto y mostrarlo

let boton = document.getElementById("guardarAuto");
let salidaAuto = document.getElementById("salidaAuto");

boton.addEventListener("click", function () {
  let color = document.getElementById("colorAuto").value;
  let marca = document.getElementById("marcaAuto").value;
  let modelo = document.getElementById("modeloAuto").value;

  salidaAuto.innerHTML = `Auto cargado: <strong>${marca} ${modelo}, color ${color}</strong>`;
});

// Ejercicio tres. Filtrar autos por color

const autos = [
  { marca: "Toyota", modelo: "Etios", color: "gris" },
  { marca: "Ford", modelo: "Focus", color: "negro" },
  { marca: "Chevrolet", modelo: "Onix", color: "blanco" },
  { marca: "Fiat", modelo: "Clio", color: "gris" },
  { marca: "Fiat", modelo: "Golf", color: "verde" },
  { marca: "Fiat", modelo: "208", color: "azul" },
  { marca: "Fiat", modelo: "Civic", color: "rojo" },
  { marca: "Fiat", modelo: "Palio", color: "gris" },
  { marca: "Nissan", modelo: "Versa", color: "gris" },
  { marca: "Hyundai", modelo: "i30", color: "plateado" },
];

let botonFiltrado = document.getElementById("buscarAuto");
let salidaFiltrada = document.getElementById("autosEncontrados");

botonFiltrado.addEventListener("click", function () {
  salidaFiltrada.innerHTML = "";
  let colorUsuario = document.getElementById("colorFiltrado").value;

  autos.forEach((auto) => {
    if (auto.color === colorUsuario) {
      salidaFiltrada.innerHTML += auto.marca + ", " + auto.modelo + " ";
    }
  });
});

// Ejercicio cuatro. filtrar por marca Fiat

let botonMarca = document.getElementById("buscarMarca");
let autoMarca = document.getElementById("autoMarca");

botonMarca.addEventListener("click", function () {
  autoMarca.innerHTML = "";
  let marcaUsuario = document.getElementById("marcaFiltrado").value;

  autos.forEach((auto) => {
    if (auto.marca === marcaUsuario) {
      autoMarca.innerHTML += `<ul><li>${auto.modelo}</li></ul>`;
    }
  });
});
