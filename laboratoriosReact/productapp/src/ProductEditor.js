import React, {Component} from 'react';


export class ProductEditor extends Component{
    return <div className="m-2">

            <div className="form-group">
            <label>ID</label>
            <input className="form-control" />
            </div>

            <div className="form-group">
            <label>NAME</label>
            <input className="form-control" />
            </div>

            <div className="form-group">
            <label>CATEGORY</label>
            <input className="form-control" />
            </div>

            <div className="form-group">
            <label>PRICE</label>
            <input className="form-control" />
            </div>

            <div className="text-cemter">
                <button className="btn btn-primary m-1">SAVE</button>
                 <button className="btn btn-secondary m-1">CANCEL</button>

            </div>

            </div>
}