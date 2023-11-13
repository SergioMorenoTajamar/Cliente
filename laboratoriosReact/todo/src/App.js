import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "clean car", done: true },
        { action: "collect tickets", done: true },
        { action: "call susan", done: false }
      ],
      newItemText: ""
    };
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    if (!this.state.todoItems.find((item) => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: this.state.newItemText, done: false }],
        newItemText: ""
      });
    }
  };

  toggleTodo = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    });

  todoTableRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input type="checkbox" checked={item.done} onChange={() => this.toggleTodo(item)} />
        </td>
      </tr>
    ));

  changeStateData = () => {
    this.setState({ userName: this.state.userName === "Bob" ? "Adam" : "Bob" });
  };

  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName} To Do List ({this.state.todoItems.filter((t) => !t.done).length} items
          to do)
        </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input
              className="form-control"
              onChange={this.updateNewTextValue}
              value={this.state.newItemText}
            />
            <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
              Add
            </button>
          </div>
        </div>

        <button className="btn btn-primary m-2" onClick={this.changeStateData}>
          Change
        </button>

        <table>
          <thead>
            <tr>
              <td>Descripcion</td>
              <td>Done</td>
            </tr>
          </thead>
          <tbody>{this.todoTableRows()}</tbody>
        </table>
      </div>
    );
  }
}