"use strict";
////tipos basicos
////Boolean
//let isDone: boolean = false;
////Number
//let deciamal: number = 6;
////Cadenad e daracteres
//let cadena: string = "Hola mundo";
////Array numerico
//let listaDeNumeros: number[] = [1, 2, 3];
//let listaDeNumeros2: Array<number> = [1, 2, 3];
////Tupla
//let x: [string, number];
//x = ["Hola mundo", 10];
////Ejemplo de strings
//let fullName: string = 'Bob Bobison';
//let age: number = 37;
//let sentence: string = `Hello my name is ${fullName} and im ${age}`;
////Enumerados
//enum Color { Red, Green, Blue };
//// c = el valor de la posicion de Green, en este caso c==1
//let c: Color = Color.Green;
////Any: tipos anonimos de cualquier tipo de dato
//let notSure: any = 4;
//notSure = "puede ser un string";
//notSure = false;
////void()
//function warnUser(): void {
//    console.log("Esto es un mensaje de error");
//}
////null y undefined
//let u: undefined = undefined;
//let n: null = null;
////Never, este tipo representa valores que nunca se reproducen
//function error(message: string): never {
//    throw new Error(message);
//}
////Declarar objetos
//declare function create(o: object | null): void;
//create({ prop: 0 });//CHACHIPE
//create(null);
////Casting
//let someValue: any = "this is s tring";
//let strLength: number = (someValue as string).length;
////Estrunctura iteratuvas
//let list3: number[] = [4, 5, 6];
//// in devuelve los indices
//for (let i in list3) {
//    console.log(i);
//}
//// in devuelve los value
//for (let i in list3) {
//    console.log(i);
//}
////MODULOS
////permitir agrupar nuestro codigo en diferentes ficheros
////obligado a exportar y usarlos donde los necesite
//export type RankingTuple = [number, string, boolean];
//export function printRankings(rankings: Array<RankingTuple>): void {
//    for (let ranking of rankings) {
//        console.log(ranking);
//    }
//}
////Importar desde otro modulo
///*import { RankingTuple, printRankings } from './myRankingModule';*/
////clases
//class Employee {
//    //atributo accesible desde fuera de la clase
//    public name: string;
//    //atributo accesible para las clases que hereden de esta
//    protected age: number;
//    //atributo accesible solo para la propia clase
//    private mobile: string;
//    constructor(name: string, age: number, mobile: string) {
//        this.name = name;
//        this.age = age;
//        this.mobile = mobile;
//    }
////getter y setter
//    get Name() {
//        return this.name
//    }
//    set Name(name:string) {
//        this.name = name;
//    }
//    get Age() {
//        return this.age
//    }
//    set Age(age: number) {
//        this.age = age;
//    }
//    get Mobile() {
//        return this.mobile
//    }
//    set Mobile(mobile: string) {
//        this.mobile = mobile;
//    }
//}
class Actor {
    constructor(name) {
        this.name = name;
    }
    set Name(value) {
        this.name = value;
    }
    get Name() {
        return this.name;
    }
}
let actor = new Actor("Haider Mailen");
console.log(actor.Name);
actor.Name = "Pepe Garcia";
console.log(actor.Name);
console.log('Hello world');
//# sourceMappingURL=app.js.map