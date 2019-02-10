import React, { Component } from 'react';
import './App.css';
import Sidebar from "react-sidebar";
import {MenuSideBar} from "./MenuSideBar.js"
import Popup from 'reactjs-popup'
import MenuIcon from '@material-ui/icons/MenuTwoTone';
import {MenuSideBar} from "./MenuSideBar.js";
import {UseForm} from "./UseForm.js";

const sideBarButtonStyle = {
  height: 'auto',
  width:  'auto',
  float:  'left',
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
      {/* <Sidebar
        sidebar={<MenuSideBar/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", width: "300px" } }}
      >
        <button
          onClick={() => this.onSetSidebarOpen(true)}
          style={sideBarButtonStyle}
        >
          <MenuIcon />
        </button>
        <UseForm/>
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
        </header> */}
        <Popup trigger={<button className="button"> Open Modal </button>} modal lockScroll = {true}>
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header"> Modal Title </div>
              <div className="content">
                {' '}
                Sample Text
              </div>
              <div className="actions">
                <Popup
                  trigger={<button className="button"> Trigger </button>}
                  position="top center"
                  closeOnDocumentClick
                >
                  <div className="menu">
                    <div className="menu-item"> Menu item 1</div>
                    <div className="menu-item"> Menu item 2</div>
                    <div className="menu-item"> Menu item 3</div>
                    <div className="menu-item"> Menu item 4</div>
                  </div>
                </Popup>
                <button
                  className="button"
                  onClick={() => {
                    close()
                  }}
                >
                  close modal
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}

export default App;
