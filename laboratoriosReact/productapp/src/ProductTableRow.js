import React, {Component} from 'react';

export class ProductTableRow extends Component{
    render() {
        //let p =>
        return <tr>
            <td>{ }</td>
            <td>{ }</td>
            <td>{ }</td>
            <td>{ }</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    }
}