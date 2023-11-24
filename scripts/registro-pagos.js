class Pagos {
    constructor(nombre, apellido, email, telefono, metodos, total, fecha) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.metodos = metodos;
        this.total = total;
        this.fecha = new Date();
    }
}