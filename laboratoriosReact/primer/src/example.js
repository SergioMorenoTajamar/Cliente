/* eslint-disable no-unused-vars */

/*import sumOdd from "./sum";*/
/*import additionFunction from "./sum";*/
import sumOdd, { sumValues } from "./sum";

import { multiply, substract } from "./operations"

import {asynAdd, asyncAdd} from "./async"

//console.log("hola")

//const myFunc = function () {

//    console.log("llamada inside de la función")
//}

//console.log("llamada outside de la función")

//myFunc();


//function myFunc(name, weather) {

//    console.log("Hello " + name + ".");
//    console.log("It's " + weather + " today");

//}
//myFunc("Javier", "sunny");

//function myFunc2(name, weather = "raining") {
//    console.log("Hello " + name + ".");
//    console.log("It's " + weather + " today");
//}
//myFunc2("javier")

//function myFunc3(name, weather, ...extraArgs) {
//    console.log("Hello " + name + ".");
//    console.log("It's " + weather + " today");
//    for (let i = 0; i < extraArgs.length; i++) {
//        console.log("extra Args:",extraArgs[i])
//    }
//}
//myFunc3("javier", "Sunny", "uno", "dos", "tres")

//function myFunc4(name) {
//    return console.log(`Hola ${name}`)
//}
//myFunc4("javier")

//function myFunc5(nameFunction) {
//    return (`Hola ${nameFunction()}`)
//}
//function printName(nameFunction, printFunction) {
//    printFunction(myFunc5(nameFunction))
//}
///*printName(function() {return "javier"},console.log)*/


// Funciones Flecha
// las funciones Flechas trabajan con constantes

const myFunc = (nameFunction) => ("Hola " + nameFunction() + ".")
const printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction))
printName(function () { return "Pablo" }, console.log)

let myArray = new Array();
myArray[0] = 100
myArray[1] = "Javier"
myArray[2] = true

for (let i = 0; i < myArray.length; i++) {
    console.log(`Index ${i}: ${myArray[i]}`)
}

let myArray2 = [100, "Javier", true]
console.log("---")
myArray2.forEach((value, index) => console.log(`Index:${index} ${value}`))


console.log("-Operador de Propagacion--")
// Operador de Propagación: Spread Operator
function printItems(numValue, stringValue, bollValue) {
    console.log(`Number: ${numValue}`)
    console.log(`Number: ${stringValue}`)
    console.log(`Number: ${bollValue}`)

}

printItems(...myArray2)

let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.5, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.5, stock: 20 }
]

let totalValue = products.filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0)
console.log(totalValue.toFixed(2))

console.log("-Objetos-")

let myData = new Object();
myData.name = "javier";
myData.weather = "Sunny";

// Objects Literal

let myData2 = {
    name: "javier",
    weather: "sunny",
    //printMessages: function () {
    //    console.log(`Hello ${myData.name}`)
    //    console.log(`It,s ${myData.weather}`)
    //}
    printMessages: () => {
        console.log(`Hello ${myData.name}`)
        console.log(`It,s ${myData.weather}`)
    }
}
myData2.printMessages()

//Clases

class myDataClass {
    constructor() {
        this.name = "Javier"
        this.weather = "Sunny"
    }
    printMessages = () => {
        console.log(`Hello ${this.name}`)
        console.log(`It,s ${this.weather}`)
    }

}
let mydataclass = new myDataClass()
let secondObject = {}

Object.assign(secondObject, mydataclass)
console.log("-dataclass-")
mydataclass.printMessages()
console.log("-secondObject-")
secondObject.printMessages();

//console.log("-Exportación Modulo-Anonima")
//let values = [10, 20, 30, 40, 50];
//let total = additionFunction(values);
//console.log(`Total: ${total}`)

//console.log("-Exportación Modulo-sumValues")
//let values2 = [10, 20, 30, 40, 50];
//let total2 = sumValues(values2);
//console.log(`Total: ${total2}`)


console.log("-Exportación Modulo-sumValues")
let values3 = [10, 20, 30, 40, 50];
let total3 = sumValues(values3);

let odds = sumOdd(values3)
console.log(`Total: ${total3},Odd Total: ${odds}`)

console.log(`Multiply: ${multiply(values3)}`)
console.log(`Substract: ${substract(1000,values3)}`)

// Promesas
console.log("-Promesas-")
/* Se construyen con un constructor llamado [promise]
   le pasamos una función que recibe dos argumentos (resolve,reject)
  
   Estados de las promesas:

   - Pendiente

   - Resuelta: Si se resuelve, se ejecuta una function mediente el método .then()

   - Rechazada: Si se rechaza, se ejecuta una function mediante el método .catch()
   
 */

const promise = new Promise((resolve, reject)=> {
    const number = Math.floor(Math.random() * 10);

    setTimeout(
        () => number > 5 ? resolve(number) : reject(new Error('Menor de 5')),
        1000
    );
})
promise
    .then(number => console.log(number))
    .catch(error => console.log(error));

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        },2000)
    })
}
async function asyncCall() {
    console.log('calling...');
    const result = await resolveAfter2Seconds()
    console.log('result asyncCall (2 segundos)')
}
asyncCall()

async function asyncCall2() {

    let values4 = [10, 20, 30, 40, 50];
    console.log('calling...');
    const total = await asynAdd(values4)
    console.log('result asyncCall2 (1 segundo)')
}
asyncCall2()