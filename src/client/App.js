import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "react-sidebar";
import {MenuSideBar} from "./MenuSideBar.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      response: "",
      post: "",
      responseToPost: ""
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onCallApi = this.onCallApi.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  onCallApi() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }



  callApi = async () => {
    const response = await fetch('/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
      <Sidebar
        sidebar={<MenuSideBar/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", width: "300px" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open Sidebar
        </button>
        <button onClick={() => this.onCallApi()}>
          Call Api
        </button>
        <b style={{color:"white"}}>{this.state.response}</b>
      </Sidebar>
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
        </header>
      </div>
    );
  }
}

export default App;
