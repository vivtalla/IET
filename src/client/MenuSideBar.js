import React, { Component } from 'react';
import {Goal} from "./Goal.js";
import {NavItem} from "./NavComponents.js";
import NavList from "./NavList.js";
//import {SimpleList} from "./SimpleList.js";
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
                <NavList onSettingsClicked={this.props.onSettingsClicked}
                         onCreateFormClicked={this.props.onCreateFormClicked}
                         onViewFormClicked={this.props.onViewFormClicked}/>
            </div>
        );
    }
}
