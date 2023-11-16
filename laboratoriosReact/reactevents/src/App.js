import React, { Component } from 'react';
import { Editor } from './Editor';
import { Display } from './Display';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        };
    }

    submitData = (newData) => {
        this.setState({ formData:newData })
    }

    render() {
        return <div className="container-fluid">
            <div className="row p-2">
                <div className="col-6">
                    <Editor submit={ this.submitData }/>
                </div>
                <div className="col-6">
                    <Display data={ this.state.formData }/>
                </div>
            </div>
            </div>
    }
   }





















/*export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Ready',
            counter: 0,
            theme: "secondary"
        };
    }

    handleEvent(event, newTheme) {
        this.setState({
            counter: this.state.counter + 1,
            theme: newTheme
        }, () => this.setState({
            message: `${event.type}:${this.state.counter}`
        }));
    }

    render() {
        return (
            <div className="m-2">
                <div className={`h4 bg-${this.state.theme} text-white text-center p-2`}>
                    {this.state.message}
                </div>
                <div className="text-center">
                    <button
                        onClick={(event) => this.handleEvent(event, "primary")}
                        className="btn btn-primary"
                    >Normal</button>
                    
                    <button
                        onClick={(event) => this.handleEvent(event, "danger")}
                        className="btn btn-danger"
                    >Danger</button>
                </div>
            </div>
        );
    }*/
