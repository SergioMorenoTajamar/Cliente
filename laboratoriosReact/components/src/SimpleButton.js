import React, {Component } from 'react';

export class SimpleButton extends Component {

    constructor(props) {

        super(props);
        this.state = {
            counter: 0,
            hasButtonBeenClicked: false
        }
    }
 
    handleClick = () => {
       // Este código, hace CASI lo mismo que la V1 que hay más abajo.
       /* 
        this.setState({ counter: this.state.counter + 1 }, 
        ()=> this.setState({hasButtonBeenClicked:this.state.counter>=0}));
       */
         // V1
        this.setState({
            counter: this.state.counter + 1,
            hasButtonBeenClicked: true
        });
        this.props.callback() 
    }
 
    render() {
        return (
            <button onClick={this.handleClick} 
                    className={this.props.className} 
                    disabled={this.props.disabled === "true" || this.props.disabled === true}
            >
            {this.props.text} 
            {this.state.counter} 
            {this.state.hasButtonBeenClicked && <div>Button Clicked!</div>}
            </button >
        )
    }
}
