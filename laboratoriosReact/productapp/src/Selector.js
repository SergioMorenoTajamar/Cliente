import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Redirect, NavLink } from "react-router-dom";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";

export class Selector extends Component {
  renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>;

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div><NavLink className="m-2 btn btn-block btn-primary" activeClassName="active" exact={true} to="/">Default URL</NavLink></div>
              <div><NavLink className="m-2 btn btn-block btn-primary" activeClassName="active" exact={true} to="/products">Products</NavLink></div>
              <div><NavLink className="m-2 btn btn-block btn-primary" activeClassName="active" exact={true} to="/suppliers">Suppliers</NavLink></div>
              <div><NavLink className="m-2 btn btn-block btn-primary" activeClassName="active" exact={true} to="/old/data">Old link</NavLink></div>
            </div>
            <div className="col">
              <Route
                path="/products"
                render={() => <ProductDisplay />}
              />
              <Route
                path="/suppliers"
                render={() => <SupplierDisplay />}
              />
              <Redirect exact from="/old/data" to="/suppliers" />
              <Redirect to="/products" />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}