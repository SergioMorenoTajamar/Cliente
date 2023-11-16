import React, { Component } from 'react';

export class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Cliente 1",
            flavor: "Vainilla",
            toppings: ["Strawberries"],
            twoScoops: false,
            order:""
        };
        this.flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vainilla"];
        this.toppings = ["Sprinkels", "Fudge Sauce", "Strawberries", "Maple Syrup"];
    }

    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value },
            () => this.props.submit(this.state));
    }

    updateFormValueOptions = (event) => {
        let options = [...event.target.options].filter(o => o.selected).map(o => o.value);
        this.setState({ [event.target.name]: options },
            () => this.props.submit(this.state));
    }

    updateFormValueCheck = (event) => {
        this.setState({ [event.target.name]: event.target.checked },
            () => this.props.submit(this.state));
    }

    updateFormValueCheck2 = (event) => {
    this.setState((state) => {
        const { name, checked } = event.target;

        if (checked && state.toppings.indexOf(name) === -1) {
            return { toppings: [...state.toppings, name] };
        } else if (!checked) {
            const updatedToppings = state.toppings.filter((topping) => topping !== name);
            return { toppings: updatedToppings };
        }

        return null;
    }, () => this.props.submit(this.state));
    }

    render() {
        return (
            <div className="container bg-info text-white p-4">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.updateFormValue}
                    />
                </div>
                <div>
                    <label>Ice Cream Flavors:</label>
                    {this.flavors.map(flavor => (
                        <div className="form-check" key={flavor}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flavor"
                                value={flavor}
                                checked={this.state.flavor === flavor}
                                onChange={this.updateFormValue}
                            />
                            <label className="form-check-label">
                                {flavor}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="form-group">
                    <label>Order:</label>
                        <textarea className="form-control"
                        name="order"
                        value={this.state.order}
                        onChange={this.updateFormValue}
                        />
                        
                </div>


               <div className="form-group">
                    <label>Ice Cream Toppings:</label>
                    {this.toppings.map(top => (
                        <div className="form-check" key={top}>
                            <input
                                type="checkbox"
                                name={top}
                                checked={this.state.toppings.indexOf(top) > -1}
                                onChange={this.updateFormValueCheck2}
                            />
                            <label className="form-check-label">
                                {top}
                            </label>
                        </div>
                    ))}
                </div>


                <div className="form-group">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="twoScoops"
                            checked={this.state.twoScoops}
                            onChange={this.updateFormValueCheck}
                        />
                        <label className="form-check-label">
                            Two Scoops
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}