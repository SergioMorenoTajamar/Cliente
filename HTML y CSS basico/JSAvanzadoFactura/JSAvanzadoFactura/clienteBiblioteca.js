//Clase Libro
function Libro(nombre, autor) {
    this.nombre = nombre;
    this.autor = autor;
}

function Biblioteca(nombre) {
    this.nombre = nombre;
    //array de libros
    this.Libros = new Array();
    this.addLibro = function anadiralibro(libro) {
        this.Libros.push(libro);
    }
    //metodo para mostrar todos los libros
    this.muestraTodosLosLibros = function muestraTodosLosLibros() {
        var cadenalibros = "";
        this.Libros.forEach(function (libro) {
            cadenalibros += libro.nombre + "\n";
        })
        return cadenalibros;
    }
}