//compras (carrito)
//sumar => los precios

const IVA = 1.21;

const productos = [
  { nombre: 'taza', precio: 1000 },
  { nombre: 'vaso', precio: 1300 },
  { nombre: 'copa', precio: 1500 },
  { nombre: 'gorra', precio: 2000 },
  { nombre: 'remera', precio: 3000 },
  { nombre: 'termo', precio: 2500 },
];

const carrito = [];
let respuestaUsuario = prompt('¿Quieres realizar un pedido?');
while (respuestaUsuario?.trim().toUpperCase() === "SI") {
  let respuestaIngresada = prompt('Ingrese el nombre del producto que desea agregar al carrito')?.trim().toLowerCase();

  // Valida que exista el producto que ingreso la persona para no enviar un null al carrito
  const existeProducto = productos.some((elemento) => elemento.nombre === respuestaIngresada?.trim().toLowerCase());
  if (!existeProducto) {
    alert('Ese producto no existe en nuestro stock');
  }
  else {
  // Agregamos el producto seleccionado al carrito
  carrito.push(productos.find((elemento) => elemento.nombre === respuestaIngresada?.trim().toLowerCase()));
  console.log('carrito', carrito);
  }

  respuestaIngresada = prompt('¿Quieres realizar otro pedido?');
  if (respuestaIngresada?.trim().toUpperCase() === "SI") {
    continue
  }
  else {
    // Sacamos el total
    const totalSinIVA = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
    console.log('total sin IVA', totalSinIVA);
    alert(`Su pedido ya fue hecho y el total con IVA es de $ ${totalSinIVA * IVA} \n ¡Gracias por su compra!`);
    break;
  }
} 
