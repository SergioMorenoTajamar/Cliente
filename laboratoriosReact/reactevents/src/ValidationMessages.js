import React, { Component } from 'react';

export class validationMenssage extends Component {
    static contextType = ValidationContext;

    render() {
        return this.contect.getMessagesForField(this.props.field).map(err =>
            <div classNmae="small bg-danger text-white mt-1 p-1" key={err}>
                {err }
            </div>
        )
    }
}