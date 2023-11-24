let carrito = localStorage.getItem('productos-agregados');

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(carrito) || [];
    cargarProductosEnCarrito();
})

const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#contenedor-carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contenedorCarritoAccionComprar = document.querySelector('#carrito-realizar-compra')
const botonVaciar = document.querySelector('#boton-vaciar');

const IVA = 1.21;
let totalCalculado;

function cargarProductosEnCarrito() {

    if(carrito.length > 0) {
    
    contenedorCarritoVacio.classList.add('oculto');
    contenedorCarritoProductos.classList.remove('oculto');
    contenedorCarritoAcciones.classList.remove('oculto');
    contenedorCarritoAccionComprar.classList.remove('oculto');

    contenedorCarritoProductos.innerHTML = '';

    carrito.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('carrito-producto');
        div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="carrito-producto-titulo">
                <small>Producto</small>
                <h5>${producto.nombre}</h5>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-eliminar" id="${producto.id}"><i class="bi bi-trash3"></i></button>
        `;

       contenedorCarritoProductos.append(div);

    }) 
    }else {

        contenedorCarritoVacio.classList.remove('oculto');
        contenedorCarritoProductos.classList.add('oculto');
        contenedorCarritoAcciones.classList.add('oculto');
        contenedorCarritoAccionComprar.classList.add('oculto');

    } 

    actualizarBotonesEliminar();
    totalFinal();
    totalIva();
}


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll('.carrito-eliminar');
  
    botonesEliminar.forEach(boton => {
      boton.addEventListener('click', eliminarProducto);
    });
}


function eliminarProducto(e) {
    const idBoton = e.currentTarget.id;
    const posicion = carrito.findIndex(producto => producto.id === idBoton);

    if(carrito[posicion].cantidad === 1){
       carrito.splice(posicion, 1);
    }else{
       carrito[posicion].cantidad--;
    }

    cargarProductosEnCarrito();
    localStorage.setItem('productos-agregados', JSON.stringify(carrito));
}


botonVaciar.addEventListener('click', vaciarCarrito);
function vaciarCarrito() {
    carrito.length = 0;
    localStorage.setItem('productos-agregados', JSON.stringify(carrito));
    cargarProductosEnCarrito();
}

function totalFinal() {
    totalCalculado = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerHTML = `$${totalCalculado}`;
}

function totalIva() {
    const totalConIva = totalCalculado * IVA;
    iva.innerHTML = `$${totalConIva}`;
    localStorage.setItem('total', JSON.stringify(totalConIva));
}