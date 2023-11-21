import React from 'react'
import { Message } from './Message'
import { Summary } from './Summary'
import ReactDOM from 'react-dom';
 
//Componentes: sin estado y con estado
//Ejemplo para un componente sin estado
 
//return --> convertir el fragmento HTML llamando al metodo React.createElement()
//import React from 'react'
//export default function App(){return React.createElement("h1", {className:"bg-primary text-white text-center p-2"})}
 
//export default function App() {
//    return (
//        <div>
//            <h1 className="bg-primary text-white text-center p-2">
//                Hello Master Desarrollo
//            </h1>
//            <Message />
//            <Summary />
//        </div>
 
//    )
//}
 
//export default () =>
 
//        <h1 className="bg-primary text-white text-center p-2">
//            Hello Master Desarrollo
//        </h1>
 
//export default App = () =>
 
//    <h1 className="bg-primary text-white text-center p-2">
//        Hello Master Desarrollo
//    </h1>
//------------------------------------------------------------------------------------------------
 
//Props: (Propiedades): permiten al componente padre proporcionar datos a sus componentes hijos
 

/*
export default function App() {
    return (
        <div>
            <h1 className="bg-primary text-white text-center p-2">
                Hello Master Desarrollo
            </h1>
            <Message greeting="Hello" name="Mary"/>
            <Message greeting="Hola" name={ "Alicia" + " Garcia"} />
            <Message greeting="Hi there" name="Jhon" />
            <Summary names={["bob","alice","Dora"]}/>
        </div>
 
    )
}

*/

function reverseNames(){
    names.reverse();
    const container=document.getElementById('root');
    ReactDOM.hydrate(<App/>,container);
}

function promoteName(name){
    names = [name, ...names.filter(val => val !== name)];
    const container = document.getElementById('root')
    ReactDOM.hydrate(<App />, container)
}

let names =["bob","Adam","Rosel"]

export default function App() {
    return (
        <table className="table table-sm table-striped">
        <thead>
				<tr><th></th><th>Name</th><th>Letters</th></tr>
		</thead>x
			<tbody>
				{names.map((name,index)=> 
              /*  <tr key={name}>
                    <Summary index={index} name={name} key={index} />
                </tr>*/
                <tr key={name}>
                <Summary index={index} name={name} reverseCallback={reverseNames} 
                promoteCallback={promoteName}/>
                </tr>
                )}
            </tbody>
            </table>
 
    )
}
/* Componente Summary recibirá un objeto prop con 3 propiedades:
Index = indice del objeto procesado en el map 
name = valor actual del array
callback = funcion prop que revierte el orden del Array
*/

/*

Props:(Propiedades): Permiten al componente padre proporcioar datos a sus compoentnes hijo
combinar JScript con las props para renderizar contenido 
key

*/