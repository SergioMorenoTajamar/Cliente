/**
[17-11.23]
[16.25] Añadido todos los componentes SupplierTable, SupplierTableRow, SupplierAddRow, SupplierAddTable, SupplierEditRow, SupplierEditTable, SupplierFilter, selector.js, ProductAndSuppliers

{revisar context provider}


[17.18] Backup hasta ahora. 

[20N]
[18.33] preparación para redux
*/

import React, { Component } from "react";
import ProductsAndSuppliers from "./ProductsAndSuppliers";
import { Provider } from "react-redux";
import dataStore from "./store";

export default class App extends Component {
    render() {
        return (
            <Provider store={dataStore}>
                <ProductsAndSuppliers />
            </Provider>
        )


    }
}