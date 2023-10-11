//Definiendo y usando funciones
    const myFunc = function () {
        console.log("Hola mundo desde dentro de la funcion");
    };
    console.log("Hola mundo desde fuera de la funcion");

    myFunc();

//Funciones con parametros
    function myFunc2(name, weather) {
        console.log(`Hola ${name}`);
        console.log(`Hoy esta ${weather}`);
}
myFunc2("Sergio", "soleado");

//Parametros Rest: capturar cualquier argumento adicional

function myFunc3(bame, weather, ...extraArgs) {
    console.log(`Hola ${name}`);
    console.log(`Hoy esta ${weather}`);
    for (let i = 0; i < extraArgs.length; i++) {
        console.log(`Extra logs ${extraArgs[i]}`);
    }
}

//Funciones como argumento de otras funciones

// Definimos la función myFunc4 que toma un argumento nameFunction, que debe ser una función.
function myFunc4(nameFunction) {
    // Devolvemos una cadena que concatena "Hello" con el resultado de invocar la función nameFunction.
    return (`Hello ${nameFunction()}`);
}

// Definimos la función printName que toma dos argumentos: nameFunction y printName.
function printName(nameFunction, printName) {
    // Llamamos a printName pasando el resultado de invocar myFunc4 con nameFunction como argumento.
    printName(myFunc4(nameFunction));
}

// Llamamos a la función printName con dos argumentos:
// 1. Una función anónima que devuelve "Sergio" como nombre.
// 2. La función console.log que imprimirá el resultado.
printName(function () { return "Sergio" }, console.log);

//Funciones Flecha
const myFunc5 = (nameFunction) => `Hello ${nameFunction()}`;
const printName2 = (nameFunction, printFunction) => printFunction(myFunc5(nameFunction));

printName2(function () { return "Sergio" }, console.log);

//Variables y tipos
function messageFunction(name, weather) {
    let message = "Hello, Sergio";
    if (weather == "soleado") {
        message = "Its a nice day";
        console.log(message);
    } else {
        message = "Its a bad day";
        console.log(message);
    }
}

messageFunction("Sergio", "Soleado");

//operadore de propagacion
//expandir array para que su contenido pueda ser usado como argumento de funciones
function printItems(numValue, stringValue, boolValue) {
    console.log(`Number:${numValue}`);
    console.log(`String:${stringValue}`);
    console.log(`Boolean:${boolValue}`);
}
let myArray = [100, "Sergio", true]
printItems(...myArray);//imprime todos los elementos del array


//Array de objetos
let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "kayak", price: 149.9, stock: 2 },
    { name: "Ball", price: 7, stock: 0 },
    { name: "shoes", price: 85.2, stock: 19 },
];

let valorTotal = products.filter(item => item.stock > 0).reduce((previo, item) => previo + (item.price * item.stock), 0);

console.log(`Total value$${valorTotal.toFixed(2)}`);

//objetos
let elObjeto = new Object();
elObjeto.id = "10";
elObjeto.nombre = "Objeto de Prueba";
elObjeto.muestraID = function () {
    alert(`El id del objeto es: ${this.id}`);
}
elObjeto.muestraNombre = function () {
    alert(`El id del objeto es: ${this.nombre}`);
}

//Crear Objetos Complejos
var Aplicacion = new Object();

Aplicacion.Modulos = new Array();
Aplicacion.Modulos[0] = new Object();
Aplicacion.Modulos[0].titulo = "lector RSS";

var inicial = new Object();

inicial.estado = 1;
inicial.publico = 0;
inicial.nombre = "Modulo RSS";
inicial.datos = new Object();

Aplicacion.Modulos[0].objetoInicial = inicial;


//JS
var modulo = new Object();
mudulo.titulo = "LectorRSS";
modulo.objetoInicial = new Object();
modulo.objetoInicial.estado = 1;
modulo.objetoInicial.publico = 0;
modulo.objetoInicial.nombre = "Modulo RSS";
modulo.objetoInicial.datos = new Object();


//JSON
 var modulo= {
    titulo: "LectorRSS",
        objetoInicial: {
        estado: 1,
            publico: 0,
                nombre: "Modulo RSS",
                    datos: { }
    }
}

//Propiedades localStorage y SesionStorage
if (window.localStorage) {
    localStorage.setItem("nombre", "Pepe");

    var nombre = localStorage.getItem("nombre");

    localStorage.removeItem("nombre");
} else {
    throw new Error('Tu navegador no admite localStorage');
}

if (window.sessionStorage) {
    sessionStorage.setItem("nombre", "Juan");

    var nombre = sessionStorage.getItem("nombre");

    localStorage.removeItem("nombre");
} else {
    throw new Error('Tu navegador no admite localStorage');
}

//Clases
class MyData {
    constructor() {
        this.name = "Javier";
        this.weather = "sunny";
    }
    printMessages = () => {
        console.log(`Hello${myData.name}`);
        console.log(`Hello${myData.weather}`);
    }
}

let myData = new MyData();
myData.printMessages;

