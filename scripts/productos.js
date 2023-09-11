//compras
//sumar => los precios

let gorra = 2000
let camisa = 3000
let termo = 2500

function sumar(TAZA, VASO) {
  let obtenerTotal = TAZA + VASO
  return obtenerTotal
}


let total = 0;
let respuestaUsuario = prompt("¿Quieres realizar un pedido?"); // SI - NO
while (respuestaUsuario?.trim().toUpperCase() === "SI") {
  let pedido = prompt("Ingrese el nombre del producto que desea agregar al carrito");
  switch (pedido) {
    case "taza":
    total += 1000;
    alert ("haz agregado una taza de ceramica de $1000")
    break;

  case "vaso":
    total += 1300;
    alert ("haz agregado un vaso termico de $1300")
    break;

  case "copa":
    total += 1500;
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

/*
let respuestaUsuario = prompt("¿Quieres realizar un pedido?"); // SI - NO
while (respuestaUsuario.trim().toUpperCase() === "SI") {

  let pedido = prompt("Ingrese el nombre del producto que desea agregar al carrito");
  switch (pedido) {
  case "taza de ceramica":
    const TAZA = 1000
    alert ("haz agregado una taza de ceramica de $1000")
    break;

  case "vaso termico":
    const VASO = 1300
    alert ("haz agregado un vaso termico de $1300")
    break;

  case "copa de champagne":
    const COPA = 1500
    alert ("haz agregado una copa de champagne de $1500")
    break;

  default:
    alert ("no haz agregado nada a tu carrito. intentalo de nuevo")
    break;
  }

  pedido = prompt("¿Quieres realizar otro pedido?")
  if (pedido.trim().toUpperCase() === "SI") {
    continue
  }
  else if (pedido.trim().toUpperCase() !== "SI") {
    prompt("Su pedido ya fue hecho y el total es de $")
    break
  } 

}



/*
if (total >= 3000) {
  alert (""); // agregar condicion
} else {
  alert ("El monto mínimo para un pedido es de $3000. Te invitamos a agregar otro pedido");
}
*/
