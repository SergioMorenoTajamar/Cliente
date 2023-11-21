import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Adam',
            todoItems: [
                { action: "buy Flowers", done: false },
                { action: "Get Shoes", done: false },
                { action: "Collect Tickets", done: true },
                { action: "Call Joe", done: false }
            ],
            newItemText: ""
        } // fin this.state
    } // FIN DEL CONSTRUCTOR

    //funciones 
    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value })
    }
    createNewTodo = () => {
        // Si la tarea no Existe en la lista todoitems
        if (!this.state.todoItems.find(items => items.action === this.state.newItemText)) {
            this.setState({// Añadimos todos los items que contenía todoitems + la nueva tarea
                todoItems: [...this.state.todoItems, { action: this.state.newItemText, done: false }],
                newItemText: "" // Reseteamos el objeto newItemText
            })

        }
    }
    // Tooglear tareas
    toogleTodo = (todo) => this.setState({
        todoItems: this.state.todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done } : item) // Dando la vuelta al done

    })

    // Mapear los objetos de la coleccion de tareas en Filas
    todoTableRows = () => this.state.todoItems.map(item =>
        <tr key={item.action }>
            <td>{item.action}</td>
            <td><input type="checkbox" checked={item.done}
                onChange={() => this.toogleTodo(item)} />
            </td>
        </tr>

    )


    //changeStateData = () => {
    //    this.setState({ userName: this.state.userName === "Adam" ? "Bob" : "Adam" })
    //}

    //render() {
    //    return (
    //        <div>
    //            <h4 className="bg-primary text-white text-center p-2">
    //                {this.state.userName}'s' to do list</h4>
    //            <button className="btn btn-primary m-2" onClick={this.changeStateData}>
    //                change
    //            </button>
    //        </div>

    //    )

    //}



    render = () => // Render con función Flecha 
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                {this.state.userName}'s To Do List
                {/*Filtramos por la lista de las que no están hechas*/}
                ({this.state.todoItems.filter(t => !t.done).length} items to do)
            </h4>
            {/*<button className="btn btn-primary m-2" onClick={this.changeStateData}>*/}
            {/*    Change*/}
            {/*</button>*/}
            <div className="container-fluid">
                <div className="my-1">
                    <input className="form-control" onChange={this.updateNewTextValue} value={this.state.newItemText} />
                    <button className="btn btn-primary m-1"
                        onClick={this.createNewTodo}>Add
                    </button>
                </div>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                <tr><th>Description</th><th>Done</th></tr>
                </thead>
                <tbody>{this.todoTableRows()}</tbody>
            </table>
        </div>


}