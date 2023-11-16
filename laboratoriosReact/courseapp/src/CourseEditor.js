import React, { Component } from 'react';

export class CourseEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            seatCapacity: "",
            instructorName: ""
        };
    }

    render() {
        return (
            <div className="m-2">
                <div className="form-group">
                    <label>TITLE</label>
                    <input className="form-control" />
                </div>

                <div className="form-group">
                    <label>SEAT CAPACITY</label>
                    <input className="form-control" />
                </div>

                <div className="form-group">
                    <label>INSTRUCTOR NAME</label>
                    <input className="form-control" />
                </div>

                <div className="text-center">
                    <button className="btn btn-primary m-1">SAVE</button>
                    <button className="btn btn-secondary m-1">CANCEL</button>
                </div>
            </div>
        );
    }
}