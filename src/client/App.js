import React, { Component } from 'react';
import './App.css';
import Sidebar from "react-sidebar";
import Settings from "./Settings.js";
import MenuIcon from '@material-ui/icons/MenuTwoTone';
import {MenuSideBar} from "./MenuSideBar.js";
import {UseForm} from "./UseForm.js";
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
      page: "home",
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
          sidebar={<MenuSideBar showing={this.state.page} onNavItemClicked={this.onNavItemClicked}/>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white", width: '20%' } }}
        >

          <div style={{width: '100%', height: '100%'}}>
          <button
            onClick={() => this.onSetSidebarOpen(true)}
            style={sideBarButtonStyle}
          >
            <MenuIcon />
          </button>
          {this.state.loggedIn == false ? <p>Log In Page Goes Here</p> :
          this.state.page == "settings" ? <Settings /> :
          this.state.page == "createForm" ? <UseForm /> :
          this.state.page == "profile" ? <p>Profile Page Goes Here</p> :
          this.state.page == "manageAccess" ? <p>Manage Access Page Goes Here</p> :
          this.state.page == "home" ? <p>Home Page Goes Here</p> : null}
          </div>
        </Sidebar>
        </div>
        <header className="App-header">

        </header>

      </div>
    );
  }
}

export default App;
