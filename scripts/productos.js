
let productos = [];

const mockProductos = async () => {
  const resp = await fetch('/mocks/productos.json')
  const data = await resp.json()

  productos = data;
  cargarEstructuraProductos(productos);
}

mockProductos ();

const contenedorProductos = document.querySelector('#contenedor-productos');
let botonesAgregar = document.querySelectorAll('.productos__button');

function cargarEstructuraProductos () {

  productos.forEach(producto => {

    const section = document.createElement('section');
    section.classList.add('productos');
    section.innerHTML = `
      <article id="container-productos" class="productos__container">
        <div>
            <img class="productos__imagen" src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="productos__info">
            <p>${producto.nombre}</p>
        </div>
        <div class="productos__precio">
            <p>$${producto.precio}</p>
        </div>
        <div class="boton-producto-container">
            <button  type="button" class="btn btn-secondary productos__button" id="${producto.id}">agregar</button>
        </div>
      </article>
    `;

    contenedorProductos.append(section);

  })

  actualizarBotonesAgregar();
  avisoProductoAgregado();

}

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll('.productos__button');

  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
  });
}

function avisoProductoAgregado () {
  botonesAgregar = document.querySelectorAll('.productos__button');

  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {

      Toastify({
        text: "Producto agregado!",
        className: "aviso-agregado",
        duration: 2000,
        gravity: 'top',
        position: 'left',
        offset: {
          x: '1em',
          y: '7em' 
        }
      }).showToast();

    });
  });
}

let carritoLocalStorage = localStorage.getItem('productos-agregados');

const carrito = JSON.parse(carritoLocalStorage) || [];

function agregarAlCarrito(e) {
  
  const idBoton = e.target.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(carrito.some(producto => producto.id === idBoton)) {

    const posicion = carrito.findIndex(producto => producto.id === idBoton);
    carrito[posicion].cantidad++;

  } else {

    productoAgregado.cantidad = 1;
    carrito.push(productoAgregado);

  }

  localStorage.setItem('productos-agregados', JSON.stringify(carrito));

}