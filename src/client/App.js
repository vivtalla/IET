import React, { Component } from 'react';
import './App.css';
import Sidebar from "react-sidebar";
import Settings from "./Settings.js";
import MenuIcon from '@material-ui/icons/MenuTwoTone';
import {MenuSideBar} from "./MenuSideBar.js";
import {UseForm} from "./UseForm.js";
const showAlerts = false;
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
      page: ""
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onCallApi = this.onCallApi.bind(this);
    this.onSettingsClicked = this.onSettingsClicked.bind(this);
    this.onCreateFormClicked = this.onCreateFormClicked.bind(this);
    this.onViewFormClicked = this.onViewFormClicked.bind(this);
  }

  onSettingsClicked(){
    if(showAlerts){
    alert("onSettingsClicked");
    }
    this.setState({
      page: "settings"
    });
  }

  onCreateFormClicked(){
    if(showAlerts){
    alert("onCreateFormClicked");
    }
    this.setState({
      page: "createForm"
    });
  }

  onViewFormClicked(){
    if(showAlerts){
    alert("onViewFormClicked");
    }
    this.setState({
      page: "viewForm"
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
          sidebar={<MenuSideBar onSettingsClicked={this.onSettingsClicked}
                                onCreateFormClicked={this.onCreateFormClicked}
                                onViewFormClicked={this.onViewFormClicked}
                                />}
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
          {this.state.page == "settings" ? <Settings /> : null}
          {this.state.page == "createForm" ? <UseForm /> : null}
          {this.state.page == "viewForm" ? <p>View Form</p> : null}
          </div>
          //end main page
        </Sidebar>
        </div>
        <header className="App-header">

        </header>

      </div>
    );
  }
}

export default App;
