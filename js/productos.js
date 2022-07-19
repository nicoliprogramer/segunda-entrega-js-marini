verCarrito.addEventListener("click", () => {
    seccionProductos.innerHTML = "";
    for (const item of carrito) {
        let cardCarrito = document.createElement("div.col");
        cardCarrito.innerHTML = `<div class="card h-100">
                            <img src="${item.img}" class="card-img-top" alt="${item.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${item.nombre}</h5>
                                <p class="card-text text-dark">$${item.precio}</p>
                            </div>
                        </div>`
        seccionProductos.append(cardCarrito);
    }

})

const productos = [
    { id: 1, nombre: "Box Premium", precio: 3240 },
    { id: 2, nombre: "Desayuno Feliz Cumpleaños", precio: 2790 },
    { id: 3, nombre: "Desayuno Romántico", precio: 3553 },
    { id: 4, nombre: "Box Desayuno", precio: 2765 },
    { id: 5, nombre: "Caja Love de Madera", precio: 3757 },
    { id: 6, nombre: "Caja Cumple de Madera", precio: 4000 },
];

localStorage.setItem("carrito", JSON.stringify(productos));



let usuario;
let usuarioStorage = localStorage.getItem("usuario");

if (usuarioStorage) {
    usuario = usuarioStorage;
    alert("Bienvenido " + usuario);
} else {
    usuario = prompt("Ingresa tu nombre");
    localStorage.setItem("usuario", usuario);
}