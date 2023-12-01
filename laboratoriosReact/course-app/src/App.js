
import React, { Component } from 'react';
import { EditorCourse } from './EditorCourse';
import { Display } from './Display';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                { id: 1, title: "Python", seatCapacity: 20, instructorName: "Javier Linan" },
                { id: 2, title: "C#", seatCapacity: 153, instructorName: "Andrei Popa" },
                { id: 3, title: "Angular", seatCapacity: 13, instructorName: "Samuel Pop" },
                { id: 4, title: "Java", seatCapacity: 47, instructorName: "Eduardo Fernandez" }
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
                 <div className="col-4">
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