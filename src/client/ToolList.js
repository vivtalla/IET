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
///////
import MagicButtonIcon from '@material-ui/icons/ThumbUp';
import NotMagicButtonIcon from '@material-ui/icons/ThumbDown';
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

class ToolList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ToolList">
        <List component="tools">
          <ListItem button>
            <ListItemIcon>
              <NotMagicButtonIcon />
            </ListItemIcon>
            <ListItemText primary="Tool 1" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotMagicButtonIcon />
            </ListItemIcon>
            <ListItemText primary="Tool 2" />
          </ListItem>
          <ListItem button component="a" href="https://youtu.be/yMMz2VwbhVI?t=64">
            <ListItemIcon>
              <MagicButtonIcon />
            </ListItemIcon>
            <ListItemText primary="T00L" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotMagicButtonIcon />
            </ListItemIcon>
            <ListItemText primary="Tool 4" />
          </ListItem>
          <ListItem button>
          <ListItemIcon>
            <NotMagicButtonIcon />
          </ListItemIcon>
            <ListItemText primary="Tool 5" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotMagicButtonIcon />
              </ListItemIcon>
            <ListItemText primary="Tool 6" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default ToolList;
