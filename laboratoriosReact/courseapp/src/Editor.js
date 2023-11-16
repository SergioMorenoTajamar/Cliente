import React, { Component } from "react";


export class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            seatCapacity: "",
            instructorName: ""
        }
    }
}