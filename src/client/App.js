import React, { Component } from 'react';
import './App.css';
import Sidebar from "react-sidebar";
import {MenuSideBar} from "./MenuSideBar.js"
import Popup from 'reactjs-popup'
import Settings from "./Settings.js";
import MenuIcon from '@material-ui/icons/MenuTwoTone';
import {UseForm} from "./UseForm.js";
import {EditMenu} from "./FormCreationMenu.js";

const showAlerts = false;
const system_loggedIn = true;
const sideBarButtonStyle = {
  height: 'auto',
  width:  'auto',
  float:  'left',
};
const sideMenuStyle = {
  height: 'auto',
  width:  'auto',
  float:  'left'
};
const mainAreaStyle = {
  height: 'auto',
  width:  'auto',
  float:  'left'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      page: "",
      loggedIn: system_loggedIn
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onCallApi = this.onCallApi.bind(this);
    this.onNavItemClicked = this.onNavItemClicked.bind(this);
  }

  onNavItemClicked(page){
    if(showAlerts){
    alert("Nav Item Clicked");
    }
    this.setState({
      page: page
    });
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
    //TODO  Might want to disabled the hamburger button here
  }

  onCallApi() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
      <div style = {sideMenuStyle}>
        <Sidebar
          sidebar={<MenuSideBar onNavItemClicked={this.onNavItemClicked}/>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white", width: "300px" } }}
        >
          //main page
          <button
            onClick={() => this.onSetSidebarOpen(true)}
            style={sideBarButtonStyle}
          >
            <MenuIcon />
          </button>
          <div>
          {this.state.loggedIn == false ? <p>Log In Page Goes Here</p> :
          this.state.page == "settings" ? <Settings /> :
          this.state.page == "createForm" ? <UseForm /> :
          this.state.page == "viewForm" ? <p>View Form Page Goes Here</p> :
          this.state.page == "profile" ? <p>Profile Page Goes Here</p> :
          this.state.page == "manageAccess" ? <p>Manage Access Page Goes Here</p> :
          this.state.page == "" ? <p>Welcome Page Goes Here</p> : null}
          </div>
          //end main page
        </Sidebar>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
        
    );
  }
}

export default App;
