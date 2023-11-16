import React, {Component} from 'react';


export class ProductDisplay extends Component{
    render () {
        return <div className="m-2">
            <ProductEditor></ProductEditor>
            <ProductTable></ProductTable>
        </div>
    }
}