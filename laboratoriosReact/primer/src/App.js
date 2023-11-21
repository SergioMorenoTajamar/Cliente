import React, { Component } from "react";
import "./App.css";
import reactLogo from "./logo.svg"
const message = "This is a constant"
const count = 5;

//function isEven() {
//    return count % 2 === 0 ? "Even" : "Odd"
//}


export default class pepe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 3
        }
    }

    isEven() {
        return this.state.count % 2 === 0 ? "Even" : "Odd"
    }

    getClassName(val) {
        return val % 2 === 0 ? "bg-primary text-white text-center p-2 m-1" : "bg-secondary text-white text-center p-2 m-1";
    }

    manejadorClick = () => this.setState({ count: this.state.count + 1 })


    render = () =>
        //<h4 className='bg-primary text-white text-center p-3'>
        //    This is an HTML element<br></br>
        //    {message}<br></br>
        //    {/*Number of things: {count}--Number of things: {isEven()}*/}
        //    Number of things: {count}--Number of things: {this.isEven()}
        //</h4>
        <h4 className={this.getClassName(this.state.count)}>
            <button className="btn btn-info m-2" onClick={this.manejadorClick}>Click Me</button>
            Number of things: {this.isEven()}
        </h4>



}


//Proceso de transformación JSX, el h4 es reemplazado por una llamada
//React.createElement generar el resultado completamente jScript