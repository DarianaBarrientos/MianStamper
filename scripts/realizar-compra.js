const pagosRegistrados = document.querySelector('#formulario');

//utilizamos un evento para trer el valor de cada campo del form
pagosRegistrados.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const metodos = document.getElementById('metodos').value
    const persona = {
      nombre,
      apellido,
      email,
      telefono,
      metodos
    };
  
    //si hay datos validos se resetea la pagina y se envia a la siguiente pagina, sino manda un mensaje de error     
    if (registrarPagos(persona)) {
        pagosRegistrados.reset();
        localStorage.removeItem('productos-agregados')
        window.location = '../pages/historial-compras.html';
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Por favor verifica que tus datos estén bien colocados!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        
    }
        
});

const avisoTelefono = document.querySelector('#tlf-incompleto')

//validamos que los campos esten bien completados
const validarRegistros = (persona) => {
    if (persona.length > 0) {
        return true;
    }
    if (persona.telefono.length >= 10) {
        return true;
    }else {
        avisoTelefono.classList.remove('oculto');
    }

    return false;

};

let pagosLocalStorage = localStorage.getItem('registro-de-pagos');

const pagos = JSON.parse(pagosLocalStorage) || [];

//cuando esté todo validado se guardaran los datos en el historial local y se sumaran al array de pagos
const registrarPagos = (persona) => {

    let total = localStorage.getItem('total');
    
    const erroresDeCampo = validarRegistros(persona);

    if (!erroresDeCampo) {
      return false;
    };

    persona.total = total;
    persona.fecha = new Date();
    
    let unPago = new Pagos (persona);
    pagos.push(unPago);
    localStorage.setItem('registro-de-pagos', JSON.stringify(pagos));
    return true;
    
};