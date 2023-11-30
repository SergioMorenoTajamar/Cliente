import React, {Component} from "react";
import { ValidationData } from "./Validation";
import { ValidationContext } from "./ValidationContext";


export class FormValidator extends Component{
    constructor(props){
        super(props);
        this.state={
            errors:{},
            dirty:{},
            formSubmitted:false,
            getMessagesForField: this.getMessagesForField
        }
    }


    static getDerivedStateFromProps(props,state){

        state.errors= ValidationData(props.data, props.rules);

        if(state.formSubmitted && Object.keys(state.errors).length === 0){

            let formErrors = props.validateForm(props.data);

            if(formErrors.length > 0){
                state.errors.form = formErrors;
            }
        }

        return state;
    }
    
    get formValid(){

        return Object.keys(this.state.errors).length === 0;
    }

    handleChange= (ev)=>{
        let name =ev.target.name;
        this.setState(state=> state.dirty[name]=true);
    }
    

    getButtonClasses(){

        return this.state.formSubmitted && !this.formValid ? "btn-danger": "btn-primary";
    }

    getMessagesForField=(field)=>{

        return (this.state.formSubmitted || this.state.dirty[field]) ? this.state.errors[field] || []:[]
    }

    render(){
        return <>

            <ValidationContext.Provider value={this.state}>
                <div onChange={this.handleChange}>

                    {this.props.children}
                </div>

            </ValidationContext.Provider>
        </>
    }
}