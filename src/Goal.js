import React, { Component } from 'react';
import * as form from "./FormComponents.js"

const keymap = {
    yesNo: form.YesNo,
    submitReset: form.SubmitReset,
    textBox: form.TextBox,
    increment: form.Increment,
    timer: form.Timer,
    dropdown: form.Dropdown,
    default: form.ErrorField
};

export class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var fieldList = this.props.dataFields.map((entry, index) => {
            const FormComponent = keymap[entry.name] || keymap.default;
            return <FormComponent name={entry.name} 
                title={entry.title} 
                options={entry.options} 
                key={index}/>
        });
        return(
            <ul>{fieldList}</ul>
        );
    }
}