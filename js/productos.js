const productos = [
  {id: 1, nombre: "Box Premium", precio: 3240, img: "../img/producto1.jpg"},
  {id: 2, nombre: "Desayuno Feliz Cumpleaños", precio: 2790, img: "../img/producto2.jpg"},
  {id: 3, nombre: "Desayuno Romántico", precio: 3553, img: "../img/producto3.jpg"},
  {id: 4, nombre: "Box Desayuno", precio: 2765, img: "../img/producto4.jpg"},
  {id: 5, nombre: "Caja Love de Madera", precio: 3757, img: "../img/producto5.jpg"},
  {id: 6, nombre: "Caja Cumple de Madera", precio: 4000, img: "../img/producto6.jpg"},
];

localStorage.setItem("carrito", JSON.stringify([]));

const verCarrito = document.getElementById("verCarrito");
verCarrito.addEventListener("click", () => {
  const seccionProductos = document.getElementById("productos");
  seccionProductos.innerHTML = '<h3> Carrito </h3>'
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  for (const item of carrito) {
    let cardCarrito = document.createElement("div.col");
    cardCarrito.innerHTML = cardCarrito.innerHTML + `
                            <div class="card">
                                <img src=${item.img} class="cart-img" alt="desayuno"/>
                                <div class="card-body"> 
                                  <h5 class="card-title">${item.nombre}</h5>
                                  <p class="card-text text-dark">$${item.precio}</p>
                                  <p class="card-text text-dark">Cantidad: ${item.cantidad}</p>
                                </div>
                            </div>`

    cardCarrito.innerHTML = cardCarrito.innerHTML;
    seccionProductos.append(cardCarrito);
  }

})


const addProduct = function (a) {
  let carrito = JSON.parse(localStorage.getItem('carrito'));

  // para ver si existe en el carrito
  const product = carrito.filter(p => p.id == a.target.id)[0]

  // product !==null || product !== undefined
  // si no existe en el localstorage
  if (product === undefined) {
    // productos.filter(p => p.id == a.target.id) = [{id: 1, nombre: "Box Premium", precio: 3240}]
    // [{id: 1, nombre: "Box Premium", precio: 3240,cantidad: 1}]
    const nuevoProducto = productos.filter(p => p.id == a.target.id).map(p => ({...p, cantidad: 1}))[0];
    carrito.push(nuevoProducto)
  } else {
    //  si existe en el localstorage, le sumo 1  a la cantidad
    carrito = carrito.map(p => {
      // si es el que estoy clickeando para agregar al carrito
      if (p.id == a.target.id) {
        return {
          ...p,
          cantidad: p.cantidad + 1
        }
      } else {
        // si es otro que no estoy clickeando, lo dejo igual
        return p
      }
    })
  }
  // guardo el carrito actualizado
  localStorage.setItem('carrito', JSON.stringify(carrito));
};

const elements = document.getElementsByClassName("add-to-cart");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', addProduct);
}


let usuario;
let usuarioStorage = localStorage.getItem("usuario");

if (usuarioStorage) {
  usuario = usuarioStorage;
  alert("Bienvenido " + usuario);
} else {
  usuario = prompt("Ingresa tu nombre");
  localStorage.setItem("usuario", usuario);
}


