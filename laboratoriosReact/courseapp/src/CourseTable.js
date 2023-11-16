import React, { Component } from 'react';
import { CourseTableRow } from './CourseTableRow';

export class CourseTable extends Component {
    render() {
        return <table>
            <thead>
                <tr colspan="5" className="bg-primary text-white text-center">
                    Courses
                </tr>
                <tr>
                    <th>TITLE</th><th>SEAT CAPACITY</th>
                    <th>INSTRUCTOR NAME</th> <th></th>
                </tr>
                <tr>
                    <CourseTableRow></CourseTableRow>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    }
}