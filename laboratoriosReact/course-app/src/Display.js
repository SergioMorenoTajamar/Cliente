import React, { Component } from "react";

export class Display extends Component {
    render() {
        const {courses} = this.props;
        const keys = Object.keys(courses)

        if (keys.length === 0) {
            
            return <div className="bg-secondary p-2 text-white">No data</div>
        } else {

        return (
            
            <div>
                <h2 className="text-center text-white bg-info p-2">Course list</h2>
                <table className="table table-striped table-bordered ">
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
