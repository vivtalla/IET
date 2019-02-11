import React, { Component } from 'react';
//import './App.css';
//import Sidebar from "react-sidebar";
//import MenuIcon from '@material-ui/icons/MenuTwoTone';
//import {MenuSideBar} from "./MenuSideBar.js";
//import {UseForm} from "./UseForm.js";
const showAlerts = true;
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    //this.handleClick = this.handleClick.bind(this);
  }

  Alert() {
    alert("Hey, an alert!");
  }

  render() {
    return (
      <div className="Settings">
        Settings Page
      </div>
    );
  }
}

export default Settings;
