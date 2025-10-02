// Carga de productos y mostrarlos
let productos = [
  {
    id: 1,
    nombre: "Teclado HyperX",
    precio: 1000,
    stock: 5,
    ruta_img: "img/teclado.png",
  },
  {
    id: 2,
    nombre: "Mouse HyperX",
    precio: 500,
    stock: 10,
    ruta_img: "img/teclado.png",
  },
  {
    id: 3,
    nombre: "Pantalla HyperX",
    precio: 1500,
    stock: 2,
    ruta_img: "img/teclado.png",
  },
  {
    id: 4,
    nombre: "Ram HyperX",
    precio: 3000,
    stock: 8,
    ruta_img: "img/teclado.png",
  },
  {
    id: 5,
    nombre: "Mother HyperX",
    precio: 5000,
    stock: 3,
    ruta_img: "img/teclado.png",
  },
  {
    id: 6,
    nombre: "Grafica HyperX",
    precio: 7000,
    stock: 12,
    ruta_img: "img/teclado.png",
  },
  {
    id: 7,
    nombre: "Cooler HyperX",
    precio: 2600,
    stock: 0,
    ruta_img: "img/teclado.png",
  },
];

let listaProductos = document.getElementById("listaProductos");
let cartaProducto = "";

function mostrarProducto(array) {
  cartaProducto = "";
  array.forEach((producto) => {
    cartaProducto += `<div class="card-producto">
            <img src="${producto.ruta_img}" alt="">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button onclick="agregarACarrito(${producto.id})" ${
      producto.stock === 0 ? "disabled" : ""
    }>
                ${producto.stock === 0 ? "Sin stock" : "Agregar al carrito"}
            </button>
        </div> `;
  });

  listaProductos.innerHTML = cartaProducto;
}

mostrarProducto(productos);

let barraBusqueda = document.getElementById("barraBusqueda");

barraBusqueda.addEventListener("keyup", function () {
  let valorBusqueda = barraBusqueda.value;

  let productoFiltrado = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(valorBusqueda)
  );

  mostrarProducto(productoFiltrado);
});

//Agregar, mostrar y eliminar un producto al carrito

let carrito = [];
let productosCarrito = document.getElementById("elementos");

function agregarACarrito(id) {
  let productoAgregado = productos.find((producto) => producto.id === id);

  carrito.push(productoAgregado);
  mostrarCarrito();
}

function mostrarCarrito() {
  itemsCarrito = "";

  carrito.forEach((producto, i) => {
    itemsCarrito += `
        <li> 
          <p>${producto.nombre} - $${producto.precio} </p>    
          <button onclick="eliminarProducto(${i})"> Eliminar </button>
        </li>
        `;
  });

  productosCarrito.innerHTML = itemsCarrito;
}

function eliminarProducto(indice) {
  carrito.splice(indice, 1);
  mostrarCarrito();
}
