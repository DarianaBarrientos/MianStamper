//compras (carrito)
//sumar => los precios


let total = 0;
let respuestaUsuario = prompt("¿Quieres realizar un pedido?");
while (respuestaUsuario?.trim().toUpperCase() === "SI") {
  let pedido = prompt("Ingrese el nombre del producto que desea agregar al carrito").trim().toLowerCase();
  switch (pedido) {
    case "taza":
    total = total + 1000;
    alert ("haz agregado una taza de ceramica de $1000")
    break;

  case "vaso":
    total = total + 1300;
    alert ("haz agregado un vaso termico de $1300")
    break;

  case "copa":
    total = total + 1500;
    alert ("haz agregado una copa de champagne de $1500")
    break;

  default:
    alert ("no haz agregado nada a tu carrito. intentalo de nuevo")
    break;
  }

  pedido = prompt("¿Quieres realizar otro pedido?")
  if (pedido?.trim().toUpperCase() === "SI") {
    continue
  }
  else {
    prompt("Su pedido ya fue hecho y el total es de $" + total);
    break
  }
}

