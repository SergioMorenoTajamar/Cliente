import React, {Component} from 'react';

export class ProductTable extends Component{
    render (){
        return <table>
            <thead>
                <tr colspan="5" className="bg-primary text-white text-center">
                    Products
                </tr>
                <tr>
                    <th>ID</th> <th>NAME</th>
                    <th>CATEGORY</th> <th>PRICE</th> <th></th>
                </tr>
                <tr>
                    //mapear elementos de la bbdd
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    }
}

