import React, { Component } from 'react';
import './App.css';
import Sidebar from "react-sidebar";
import {MenuSideBar} from "./MenuSideBar.js";
import {UseForm} from "./UseForm.js";

const sideBarButtonStyle = {
  height: '40px',
  width:  '40px',
  float:  'left',
  border: '5px solid black'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onCallApi = this.onCallApi.bind(this);
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
      <Sidebar
        sidebar={<MenuSideBar/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", width: "300px" } }}
      >
        <button
          onClick={() => this.onSetSidebarOpen(true)}
          style={sideBarButtonStyle}
        >
          =
        </button>
        <UseForm/>
      </Sidebar>
        <header className="App-header">

        </header>

      </div>
    );
  }
}

export default App;
