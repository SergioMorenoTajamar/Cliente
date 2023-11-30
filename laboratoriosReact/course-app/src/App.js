
import React, { Component } from 'react';
import { EditorCourse } from './EditorCourse';
import { Display } from './Display';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                { id: 1, title: "Agile", seatCapacity: 20, instructorName: "John Jones" },
                { id: 2, title: "C#", seatCapacity: 15, instructorName: "John Jones" },
                { id: 3, title: "Angular", seatCapacity: 13, instructorName: "Ross Miller" },
                { id: 4, title: "Java", seatCapacity: 10, instructorName: "Alex Walker" }
            ]
        }
    }

    addNewCourse = newCourse => {
        const updatedCourses = [...this.state.courses, newCourse];
        this.setState({ courses: updatedCourses });
    }

    render() {
        return (
            <div className="conatiner-fluid">
            <div className="row ">
                 <div className="col-3">
                    <EditorCourse addNewCourse={this.addNewCourse} />
                </div>

                <div className="col">
                    <Display courses={this.state.courses} />
                </div>

                </div>
            </div>
        );
    }
}