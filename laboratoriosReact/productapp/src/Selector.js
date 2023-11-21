import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect, NavLink } from "react-router-dom"
import { ProductDisplay } from "./ProductDisplay"
import { SupplierDisplay } from "./SupplierDisplay"


export class Selector extends Component {

    renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        selection: React.Children.toArray(props.children)[0].props.name
    //    }
    //}
    //setSelection = (ev) => {
    //    ev.persist();
    //    this.setState({ selection: ev.target.name });
    //}
    render() {
        //return <div className="container-fluid">
        //    <div className="row">
        //        <div className="col-2">
        //            {React.Children.map(this.props.children, c =>
        //                <button
        //                    name={c.props.name}
        //                    onClick={this.setSelection}
        //                    className={`btn btn-block m-2 ${this.state.selection === c.props.name ? "btn-primary active" : "btn-secondary"}`}>
        //                    {c.props.name}
        //                </button>
        //            )}
        //        </div>
        //        <div className="col">
        //            {
        //                React.Children.toArray(this.props.children).filter(c => c.props.name === this.state.selection)
        //            }
        //        </div>
        //    </div>
        //</div>

        return <Router>

            <div className="container-fluid">

                <div className="row">

                    <div className="col-2">
                        <div><Link to="/data">Data</Link></div>
                        <div><Link to="/data/one">Link #1</Link></div>
                        <div><Link to="/data/two">Link #2</Link></div>
                        <div><Link to="/data/three">Link #3</Link></div>
                        <div><Link to="/people/javier">Javier</Link></div>
                        <div><Link to="/people/maria">Maria</Link></div>
                        <div><NavLink to="/" activeClassName="active" exact={true} className="m-2 btn btn-block btn-primary">Default URL</NavLink></div>

                        <div><NavLink to="/products" activeClassName="active" className="m-2 btn btn-block btn-primary">Products</NavLink></div>

                        <div><NavLink to="/suppliers" activeClassName="active" className="m-2 btn btn-block btn-primary">Suppliers</NavLink></div>

                        <div><NavLink to="/old/data" activeClassName="active" className="m-2 btn btn-block btn-primary">Old Link</NavLink></div>

                    </div>

                    <div className="col">

                        <Switch>
                            <Route path={["/data/(one|three)", "/people/j*"]} render={() => this.renderMessage("Route #1")} />*/}

                            {/*<Route path={["/products", "/people/j*"]} render={() => this.renderMessage("Route #1")} />*/}
                            <Route path="/products" component={ProductDisplay} />
                            <Route path="/suppliers" component={SupplierDisplay} />
                            <Redirect from="/old/data" to="/suppliers" />
                            <Redirect to="/products" />
                        </Switch>

                    </div>

                </div>

            </div>

        </Router>
    }
}