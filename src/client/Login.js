import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
//import './App.css';
//import Sidebar from "react-sidebar";
//import MenuIcon from '@material-ui/icons/MenuTwoTone';
//import {MenuSideBar} from "./MenuSideBar.js";
//import {UseForm} from "./UseForm.js";


var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' +
                 (85 + 10 * Math.random()) + '%)';

const loginCSS = {
  backgroundColor: cssHSL,
  width: '100%',
  height: '100%',
  color: 'black',

  verticalAlign: 'left'
};

 class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(username, password) {
    this.setState({user: username, pass: password});
  }

  handleSubmit(event) {
    alert('User: ' + this.state.user + ' Pass: ' + this.state.pass);
    event.preventDefault();
    //check login
    this.props.onLoginAuth(true);
  }

  render() {
    return (

          <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

      </div>
    );
  }
}

 export default Login;
