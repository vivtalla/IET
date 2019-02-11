import React, { Component } from 'react';
import {Goal} from "./Goal.js";
import {NavItem} from "./NavComponents.js";
import ToolList from "./ToolList.js";
import NavList from "./NavList.js";
import BackArrowIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';
//import {SimpleList} from "./SimpleList.js";
import api from "./api.js";

const sideBarBackButtonStyle = {
  height: 'auto',
  width:  'auto',
  display: 'block'
};
const divStyle = {
  display: "block"
};

export class MenuSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          goBackTo: "",
          showing: "welcome"
        };
        this.getFormData = this.getFormData.bind(this);
        this.setShowing = this.setShowing.bind(this);
        this.onBackButtonPressed = this.onBackButtonPressed.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.showing != this.props.showing){
            this.setState({goBackTo: this.state.showing, showing: nextProps.showing});
        }
    }

    setShowing(show){
      this.setState({
        goBackTo: this.showing,
        showing: show
      });
    }

    onBackButtonPressed(){
      //alert("Back Button");
      this.setState({
        showing: this.state.goBackTo,
        goBackTo: ""
      });
    }

    getFormData(id) {
      api.gets('form').getForm(id)
        .then(res => this.setState({data: res.Tasks}))
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div style={divStyle}>
              <div>
                <button onClick={this.onBackButtonPressed}
                    style={sideBarBackButtonStyle}><BackArrowIcon /></button>
              </div>

              {this.state.showing == "" ? <NavList onNavItemClicked={this.props.onNavItemClicked}/> :
              this.state.showing == "nav" ? <NavList onNavItemClicked={this.props.onNavItemClicked}/> :
              this.state.showing == "welcome" ? <NavList onNavItemClicked={this.props.onNavItemClicked}/> :
              this.state.showing == "createForm" ? <ToolList/> :
              this.state.page == "viewForm" ? <p>View Form Page Goes Here</p> :
              this.state.page == "profile" ? <p>Profile Page Goes Here</p> :
              this.state.page == "manageAccess" ? <p>Manage Access Page Goes Here</p> :
              this.state.page == "" ? <p>Welcome Page Goes Here</p> : null}
            </div>
        );
    }
}
