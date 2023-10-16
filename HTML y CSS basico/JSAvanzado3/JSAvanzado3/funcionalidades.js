//Enviando informacion
var myObj = { "name": "John", "age": "31", "city": "Madrid" };
var myJson = JSON.stringify(myObj);

window.location = "demo_json.apx?x=" + myJson;

//Recibiendo datos

var myJson = { "name": "John", "age": "31", "city": "Madrid" };
var myObj = JSON.parse(myJson);

document.getElementById("demo").innerHTML = myObj.name;

class myData () {
    this.name = "Javier";
    this.weather = "sunny";
}

printMessages = () => {
    console.log(`Hello ${"myData.name"}`);
    console.log(`Hello ${"myData.weather"}`);
}
let myData = new myData();
let secondObject = { ...myData, weather: "Cloudy" };


//Capturar nombre de para,etros desde objetos
const myData2 = {
    name = `Javier´
    location {
        city = "Valdemoro";
        countrie = `Spain`;
    }
} 