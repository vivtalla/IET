import React, { Component } from 'react';
import './App.css';
import Sidebar from "react-sidebar";
import MenuIcon from '@material-ui/icons/MenuTwoTone';
import Settings from "./Settings.js"
import {MenuSideBar} from "./MenuSideBar.js";
import {UseForm} from "./UseForm.js";

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ForumIcon from '@material-ui/icons/Forum';

import SettingsIcon from '@material-ui/icons/Settings';
import FormCreationIcon from '@material-ui/icons/Note';
import ViewFormIcon from '@material-ui/icons/Search';
import ManageAccessIcon from '@material-ui/icons/People';
import ProfileIcon from '@material-ui/icons/Portrait';
import HomeIcon from '@material-ui/icons/Home';
///////
import MagicButtonIcon from '@material-ui/icons/ThumbUp';
///////


const sideBarButtonStyle = {
  height: 'auto',
  width:  'auto',
  float:  'left',
};

class ListItemLink extends Component {
  constructor(props){
    super(props);

  }
  render(props){
    return <ListItem button component="a" {...props} />;
  }

};

class NavList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="NavList">
        <List component="nav">
        <ListItem button onClick={()=>this.props.onNavItemClicked("home")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
          <ListItem button onClick={()=>this.props.onNavItemClicked("createForm")}>
            <ListItemIcon>
              <FormCreationIcon />
            </ListItemIcon>
            <ListItemText primary="Create Form" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button onClick={()=>this.props.onNavItemClicked("settings")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={()=>this.props.onNavItemClicked("profile")}>
            <ListItemIcon>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={()=>this.props.onNavItemClicked("manageAccess")}>
          <ListItemIcon>
            <ManageAccessIcon />
          </ListItemIcon>
            <ListItemText primary="Manage Access" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <ListItemIcon>
              <MagicButtonIcon />
              </ListItemIcon>
            <ListItemText primary="Magic Button" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default NavList;
