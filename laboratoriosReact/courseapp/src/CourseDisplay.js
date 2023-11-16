import React, { Component } from 'react';
import { CourseEditor } from './CourseEditor';
import { CourseTable } from './CourseTable';
import { Editor } from './Editor';


export class CourseDisplay extends Component {
    render() {
        return <div className="m-2">
            <CourseEditor></CourseEditor>
            <CourseTable></CourseTable>
        </div>
    }
}