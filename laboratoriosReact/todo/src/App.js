import React from "react";
import { Message } from "./Message";
import { Summary } from "./Summary";
import ReactDOM from "react-dom";

let names = ["Bob", "Adam", "Rosel"]

function reverseNames() {
    names.reverse();
    const container = document.getElementById('root');
    ReactDOM.hydrate(<App />, container);
    //ReactDOM.render(<App />, document.getElementById('root'));
}

function promoteName(name) {
    names = [name, ...names.filter(val => val != name)];
    const container = document.getElementById('root');
    ReactDOM.hydrate(<App />, container);
}

export default function App() {
    return (
        <table className="table table-sm table-striped">
            <thead>
                <tr><th></th><th>Name</th><th>Letters</th></tr>
            </thead>
            <tbody>
                {names.map((name, index) => 
                    <tr key={name}>
                        <Summary index={index} name={name}
                            reverseCallback={reverseNames} promoteCallback={promoteName} />
                    </tr>
                    )}
            </tbody>
        </table>
        )
}
//El componente Summary recibirá un objeto prop con 3 propiedades:
//index: indice del objeto procesado en el map
//name: valor actual del array
//reverseCallback: funcion prop que revierte el orden del array




//Componentes: sin estado, con estado
//Props: (Propiedades): permiten al componente padre proporcionar datos a sus componentes hijo
//Combinar jScript con las props para renderizar contenido
//Key: permite especificar una clave para identificar el elemento de la colección
//Functions props: notifican al componente padre que ha sucedido y este responde cambiando el valor 
//de las data props y actualiza el contenido al usuario
//data props : padre --> hijo
//function props: hijo --> padre

//Transferir todas las props a los componentes hijos {...props}