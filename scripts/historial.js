//traemos los datos del form guardados anteriormente
let pagos = localStorage.getItem('registro-de-pagos');

const tablaVaciaHistorial = document.querySelector('#tabla-historial');
const parrafoHistorialVacio = document.querySelector('#parrafo-historial-vacio');

//evento para que se cargue adecuandamente el DOM 
document.addEventListener('DOMContentLoaded', () => {
    pagos = JSON.parse(pagos) || [];

    if(pagos.length > 0) {
        mostrarTabla(pagos);
    }else {
        tablaVaciaHistorial.classList.add('oculto');
        parrafoHistorialVacio.classList.remove('oculto')
    }
    
});

const buscador = document.querySelector('#buscar-historial');

//evento para mostrar uno por uno los datos de pago mediante DOM
let tablaHistorial = document.querySelector('#cuepo-tabla-historial');
function mostrarTabla (pagos = []) {
    tablaHistorial.innerHTML = '';
    
    pagos.forEach((pago) => {
        const fechaLimpia = conseguirFecha(pago.fecha)
        const tr = document.createElement('tr');
        tr.classList.add('tabla-historial-tr');
        tr.innerHTML = `
        <th scope="col">${pago.nombre.toLowerCase().trim()}</th>
        <th scope="col">${pago.apellido.toLowerCase().trim()}</th>
        <th scope="col">${pago.email.toLowerCase().trim()}</th>
        <th scope="col">${pago.telefono}</th>
        <th scope="col">${pago.metodos}</th>
        <th scope="col">$${pago.total}</th>
        <th scope="col">${fechaLimpia}</th>
        `;

        tablaHistorial.append(tr);
    });

};

//para mas eficiencia tambien colocamos un evento que escuche el teclado y al hacer enter traiga lo indicado 
buscador.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        cargarHistorial();
    }
});

//realizamos un filtro en el array de pagos para encontrar datos coincidentes y traer lo buscado
const filtroBusqueda = (busqueda = '', pagos = []) => pagos.filter((pago) => pago.nombre.toLowerCase().includes(busqueda.toLowerCase()));

function cargarHistorial() { 

    const busqueda = buscador.value.trim().toLowerCase();
    const resultados = filtroBusqueda(busqueda, pagos);

    mostrarTabla(resultados);
    tablaVaciaHistorial.classList.remove('oculto');
} 