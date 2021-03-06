import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = (drawerWidth) => makeStyles((theme) => ({
  list: {
    width: drawerWidth,
  },
  fullList: {
    width: 'auto',
  },
}));

const DrawerList = ({
  anchor, drawerWidth, isTopOrBottom, toggleDrawer,
}) => {
  const classes = useStyles(drawerWidth)();

  return (
    <div
      className={clsx(classes.list, {
        // [classes.fullList]: anchor === "top" || anchor === "bottom",
        [classes.fullList]: isTopOrBottom(anchor),
      })}
      role="presentation"
      onClick={isTopOrBottom(anchor) ? toggleDrawer(anchor, false) : null}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerList;
