/* let pagosRegistrados = [];

const nombreDelComprador = document.querySelector('#nombre');

nombreDelComprador.addEventListener('change', respuesta);

function respuesta() {
    console.log(nombreDelComprador.valor)
};
 */

/* const form = document.getElementById("formulario");
form.addEventListener('click', () => {
    const formData = new FormData(form);
}); */

/* const nombreDelComprador = document.querySelector('#nombre');
nombreDelComprador.addEventListener('change', data);
function data() {
    console.log(nombreDelComprador.valor)
} */

/* const pagosRegistrados = document.querySelector('#formulario');

pagosRegistrados.addEventListener('click', () => {
    let nombre = document
    .getElementById("nombre")
    .value.trim()
    .toLowerCase();

    let apellido = document
    .getElementById("apellido")
    .value.trim()
    .toLowerCase();

    if (pagosRegistrados(nombre, apellido)) {
        miFormulario.reset();
        window.location = ""; //!!
      } else {
        alert("Verifica los inputs ingresados!");
      }
    
}); */

/* let pagos = [];

const pagosRegistrados = document.querySelector('#formulario');
pagosRegistrados.addEventListener('submit', (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim().toLowerCase();
    let apellido = document.getElementById("apellido").value.trim().toLowerCase();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let efectivo = document.getElementById("efectivo").value;
    let credito = document.getElementById("credito").value;
    let debito = document.getElementById("debito").value;

    if (pagosRegistrados(nombre, apellido, email, telefono, efectivo, credito, debito)) {
        pagosRegistrados.reset();
        alert("Usuario registrado satisfactoriamente!");
        /* window.location = "/pages/ingresar.html";
      } else {
        alert("Verifica los inputs ingresados!");
      }

    localStorage.setItem('pagos-registrados', JSON.stringify(pagosRegistrados));
})

pagosRegistrados();

let datos = localStorage.getItem('pagos-registrados');

pagos = datos;

console.log(pagos) */



const pagosRegistrados = document.querySelector('#formulario');

pagosRegistrados.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value.trim().toLowerCase();
    let apellido = document.getElementById("apellido").value.trim().toLowerCase();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let metodos = document.getElementById("metodos").value
        
    if (registrarPagos(nombre, apellido, email, telefono, metodos)) {
        pagosRegistrados.reset();
        alert("Usuario registrado satisfactoriamente!");
        /* window.location = ""; */
    } else {
        alert("Verifica los inputs ingresados!");
    }
        
});
    
const validarRegistros = (
    nombre = "",
    apellido = "",
    email = "",
    telefono = "",

  ) => {
    if (nombre.length == 0) {
        alert("El Nombre de usuario es requerido.");
        return false;
    }
    if (apellido.length == 0) {
        alert("Repetir apellido de usuario es requerido.");
        return false;
    }
    if (email.length == 0) {
        alert("Repetir email de usuario es requerido.");
        return false;
    }
    if (telefono.length < 10) {
        alert("Repetir telefono de usuario es requerido.");
        return false;
    }

    return true;
};

let pagosLocalStorage = localStorage.getItem('registro-de-pagos');

const pagos = JSON.parse(pagosLocalStorage) || [];

const registrarPagos = (
    nombre,
    apellido,
    email,
    telefono,
    metodos
  ) => {
    const erroresDeCampo = validarRegistros(
      nombre,
      apellido,
      email,
      telefono,
      metodos
    );

    if (!erroresDeCampo) {
      return false;
    };

    let unPago = new Pagos (nombre, apellido, email, telefono, metodos);
    pagos.push(unPago);
    localStorage.setItem('registro-de-pagos', JSON.stringify(pagos));
    return true;
    
};

console.log(pagos)

/* const DateTime = luxon.DateTime;

const fecha = DateTime.local().toString;

console.log(fecha); */
