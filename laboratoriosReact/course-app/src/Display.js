import React, { Component } from "react";

export class Display extends Component {
    render() {
        const {courses} = this.props;
        const keys = Object.keys(courses)

        if (keys.length === 0) {
            
            return <div className="bg-secondary text-white">No data</div>
        } else {

        return (
            
            <div>
                <h2 className="text-center text-white bg-primary ">Course list</h2>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Seat Capacity</th>
                            <th>Instructor Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index}>
                                <td>{course.id}</td>
                                <td>{course.title}</td>
                                <td>{course.seatCapacity}</td>
                                <td>{course.instructorName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )
        }
    }
}
