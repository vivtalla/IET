import React from 'react';
import PropTypes from 'prop-types';
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
///////

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function NavList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <FormCreationIcon />
          </ListItemIcon>
          <ListItemText primary="Create Form" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ViewFormIcon />
          </ListItemIcon>
          <ListItemText primary="View Form" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
          <ManageAccessIcon />
        </ListItemIcon>
          <ListItemText primary="Manage Access" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItemLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <ListItemIcon>
            <MagicButtonIcon />
            </ListItemIcon>
          <ListItemText primary="Magic Button" />
        </ListItemLink>
      </List>
    </div>
  );
}

NavList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavList);
