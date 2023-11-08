import React, { Component } from "react";
const message = "This is a constant";
export default class extends Component { 
constructor(props) {
    super(props);
    this.state = {
        count: 3
}
}
isEven(){
    return this.state.count % 2 === 0 ? "Even" : "Odd";
}
    getClassName(val) {
        return val % 2 === 0 ? "bg-primary text-white text-center p-2 m-1" :
        "bg-secondary text-white text-center p-2 m-1"
    }

    manejadorClick = () => this.setState({ count: this.satate.count + 1 });

    render = () =>
        <h4 className={this.getClassName(this.state.count)}>
            <button className="btn btn-info m-2" onClick={this.manejadorClick }>Click me</button>
            Number of things : {this.isEven()}
        </h4>
}