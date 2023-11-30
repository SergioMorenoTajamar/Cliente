import React, { Component } from "react";
import {FormValidator} from "./FormValidator"
import {ValidationMessages} from "./ValidationMessages"
import {ValidateForm} from "./wholeFormValidator"

export class EditorCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 100,
      title: "",
      seatCapacity: "",
      instructorName: "",
      errors:{},
      dirty:{}
    }
    this.rules = {
      title: { required: true, minlength: 5, alpha: true },
      seatCapacity: { required: true },
      instructorName: {required:true}
      
  }
  }

  updateFormValue = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      [name]: value,
      errors: { ...prevState.errors, [name]: null }, 
      dirty: { ...prevState.dirty, [name]: true } 
    }));
  };


  handleSubmit = event => {
    event.preventDefault();
  
    const errors = ValidateForm(this.state);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return errors;
    }
  
    const { id, title, seatCapacity, instructorName } = this.state;
    this.props.addNewCourse({
      id,
      title,
      seatCapacity,
      instructorName
    });
  
    this.setState({
      id: this.state.id + 1,
      title: "",
      seatCapacity: "",
      instructorName: "",
      errors: {},
      dirty: {}
    });
  }
  


    render() {
        return (
          <div className="h5 text-white p-2 bg-info">
            <h2>Add Course</h2>
            <FormValidator data={this.state} rules={this.rules}
              submit={this.props.submit} validateForm={ValidateForm}>
              <ValidationMessages field="form"/>
            <div onSubmit={this.handleSubmit}>
            
              <div className="form-group">
                <label>ID</label>
                <input
                  className="form-control"
                  name="id"
                  value={this.state.id}
                  onChange={this.updateFormValue}
                  readOnly={true}/>
              </div>
              
              <div className="form-group">
                <label>Title</label>
                <input
                  className="form-control"
                  name="title"
                  value={this.state.title}
                  onChange={this.updateFormValue}/>
                
                <ValidationMessages field="title"/>
              </div>
              
              <div className="form-group">
                <label>Seat Capacity</label>
                <input
                  className="form-control"
                  name="seatCapacity"
                  value={this.state.seatCapacity}
                  onChange={this.updateFormValue}/>
                <ValidationMessages field="seatCapacity"/>
              </div>

              <div className="form-group">
                <label>Instructor Name</label>
                <input
                  className="form-control"
                  name="instructorName"
                  value={this.state.instructorName}
                  onChange={this.updateFormValue}/>
                <ValidationMessages field="instructorName"/>
              </div>
              <div className="m-2">
              <button type="submit" className="btn btn-warning" onClick={this.handleSubmit}>
                  Add Course
              </button>
            </div>

            </div>
            </FormValidator>
          </div>
        );
      }
}
 
