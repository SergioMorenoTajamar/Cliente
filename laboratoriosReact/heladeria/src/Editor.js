import React,{ Component } from "react";


export class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Cliente1",
            flavor: "Vanilla",
            toppings: ["Strawberries"],
            twoScoops: false,
            order:""
        }
        this.flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
        this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", " Maple Syrup"]
    }

    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => this.props.submit(this.state))
    }

    updateFormValueOptions = (event) => {
        let options = [...event.target.options].filter(o => o.selected).map(o => o.value);
        this.setState({ [event.target.name]: options }, () => this.props.submit(this.state))
    }

    updateFormValueCheck = (event) => {
        this.setState({ [event.target.name]: event.target.checked }, () => this.props.submit(this.state))
    }

    updateFormValueCheck2 = (event) => {
        let newToppings = [];

        if (event.target.checked) {
            newToppings = [...this.state.toppings, event.target.name];
        } else {
           /* let index = this.state.toppings.indexOf(event.target.name);*/
            newToppings = [...this.state.toppings.filter(i => i !== event.target.name)]
        }
        this.setState({ toppings: newToppings }, () => this.props.submit(this.state))
    }

    render() {
        return (
            <div className="h5 bg-info text-white p-2">
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name="name" value={this.state.name} onChange={this.updateFormValue} />
                </div>
                <div className="form-group" >
                    <label>Ice Cream Flavors:</label>
                    {this.flavors.map(flavor => (
                        <div className="form-check" key={flavor}>
                            <input className="form-check-input"
                                type="radio"
                                name="flavor"
                                value={flavor}
                                checked={this.state.flavor === flavor} onChange={this.updateFormValue} />
                            <label className="form-check-label">
                                {flavor}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="twoScoops" checked={this.state.twoScoops} onChange={this.updateFormValueCheck} />
                        <label>
                            Two Scoops
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Ice Cream Toppings:</label>
                    {this.toppings.map(top =>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name={top} value={this.state[top]} onChange={this.updateFormValueCheck2} checked={this.state.toppings.indexOf(top) > -1} />
                            <label>
                                {top}
                            </label>

                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label>Order:</label>
                    <textarea className="form-control"
                        name="order"
                        value={this.state.order}
                        onChange={this.updateFormValue} />
                </div>

            </div>

        )
    }
}