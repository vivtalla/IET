import React, { Component } from 'react';
import {Goal} from "./Goal.js";
import api from "./api.js";

export class MenuSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
        this.getFormData = this.getFormData.bind(this);
    }

    getFormData(id) {
      api.gets('form').getForm(id)
        .then(res => this.setState({data: res.Tasks}))
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <b>Sidebar Cotents</b>
                <br></br>
                <i>Need to add stuff here</i>
                <br/>
                <button onClick={() => {this.getFormData(12345)}}>
                Get Form data
                </button><br/>
                <Goal dataFields={this.state.data}/>
            </div>
        );
    }
}
