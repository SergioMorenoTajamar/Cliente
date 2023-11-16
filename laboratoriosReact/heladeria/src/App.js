import React, { Component } from 'react';
import { Display } from './Display';
import { Editor } from './Editor';


// [16.47] Primera Versi�n
// [16.59] Evento Onclick
// [17.05] Evento Onclick [onMouseup onMouseDown]
// [17.10] Evento Onclick Counter (Manejador de eventos)
// [17.23] Evento Onclick Counter + theme
// [17.45] Formularios Creados [Editor.js,Display.js]
// [17.51] Modificaci�n Completa de App.js
// [18.08] Ya tenemos Editor
// [19.04] Mapear y A�adir Elementos [name]
// [19.04] Mapear y A�adir Elementos [Ice Cream Flavors] [select]
// [19.19] Mapear y A�adir Elementos [Ice Cream Flavors] [select multiple]
// [19.32] Se ha cambiado el primer Select por un options [options]
// [19.43] Se ha agregado checkbox TwoScopps [checkbox]
// [20.00] Se ha agregado [checkbox] y [textArea]
// [20.35] Bug  Ice Cream Toopins Corregido [Camilo y Pablo Torrecilla]


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {}

        }
    }

    submitData = (newData) => {
        this.setState({ formData: newData })

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row p-2">
                    <div className="col-6">
                        <Editor submit={this.submitData} />
                    </div>
                    <div className="col-6">
                        <Display data={this.state.formData} />
                    </div>

                </div>
            </div>
        )
    }
}




/* 
Cuando Lanzamos un evento, recibimos un [OBJECT] que tiene (propiedades y m�todos)
    target: Indica cual es el objeto que ha levantado el evento 
    type: [string] que indica el tipo de evento que se ha disparado
    persist(): metodo para que el evento perdure en sucesivas llamadas (si trabajo de manera asincrona, que no son inmediatas, tiene que durar hasta que la petici�n as�crona se complete)
*/