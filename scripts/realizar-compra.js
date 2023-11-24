const pagosRegistrados = document.querySelector('#formulario');

pagosRegistrados.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const metodos = document.getElementById("metodos").value
    const persona = {
      nombre,
      apellido,
      email,
      telefono,
      metodos
    };
  
        
    if (registrarPagos(persona)) {
        pagosRegistrados.reset();
        window.location = "../pages/historial-compras.html";
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Por favor verifica que tus datos estén bien colocados!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        
    }
        
});
    
const validarRegistros = (persona) => {
    if (persona.length > 0) {
        return true;
    }
    if (persona.telefono.length >= 10) {
        return true;
    }

    return false;

};


let pagosLocalStorage = localStorage.getItem('registro-de-pagos');

const pagos = JSON.parse(pagosLocalStorage) || [];

const registrarPagos = (persona) => {

    const { nombre, apellido, email, telefono, metodos } = persona;
    const erroresDeCampo = validarRegistros(persona);
  
    let total = localStorage.getItem('total');

    if (!erroresDeCampo) {
      return false;
    };

    let unPago = new Pagos (nombre.trim().toLowerCase(), apellido.trim().toLowerCase(), email.trim().toLowerCase(), telefono, metodos, total);
    pagos.push(unPago);
    localStorage.setItem('registro-de-pagos', JSON.stringify(pagos));
    return true;
    
};

