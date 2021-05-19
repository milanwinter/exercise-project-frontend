import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withRouter } from "react-router-dom"

const drawerWidth = 190;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { history } = props

  const itemsList = [
      {
          text: "My Workouts",
          onClick: () => history.push('/workouts')
      },
      {
          text: "Exercises",
          onClick: () => history.push('/exercises')
      }

  ]

  const secondList = [
      {
          text: "Profile",
          onClick: () => history.push('/profile')
      },
      {
          text: "Logout",
          onClick: () => history.push('/logout')
      }
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Name of the Website would go here!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {itemsList.map((item, index) => {
                const { text, onClick }  = item;
                return (
               <ListItem button key={text} onClick={onClick}>
                <ListItemText primary={text} />
              </ListItem> 
                )
            }
              
            )}
          </List>
          <List> </List>
          <Divider />
          <List>
            {secondList.map((item, index) => {
                const {text, onClick} = item;
                return (
                <ListItem button key={text} onClick = {onClick}>
                <ListItemText primary={text} onClick={onClick} />
              </ListItem>
                )
              }
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
export default withRouter(NavBar);