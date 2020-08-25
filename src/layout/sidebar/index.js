import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import UserCard from '../../components/user-card';
import { NavLink } from 'react-router-dom';
import LogoCard from '../../components/logo-card';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textTransform: 'capitalize',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    width: '100%',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
  },
  activeLink: {
    background: theme.palette.background.default,
  },
  listItemIcon: {
    padding: '0 5px',
    marginRight: 'auto',
  },
}));

export default function SwipeableTemporaryDrawer({
  openSidebar,
  setOpenSidebar,
  auth,
  setAuth,
  user,
  navLinks,
  handleUserLinks,
  Logo,
}) {
  const classes = useStyles();

  const toggleDrawer = (event) => {
    setOpenSidebar(!openSidebar);
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
  };

  return (
    <div>
      <SwipeableDrawer
        anchor='left'
        open={!!openSidebar}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div className={classes.list}>
          {auth ? (
            <>
              <div className={classes.Avatar}>
                <UserCard {...user} />
              </div>
              <Divider />
            </>
          ) : (
            <>
              <LogoCard logo={Logo} setOpenSidebar={setOpenSidebar} isSidebar />
              <Divider />
              <ListItem
                button
                className={classes.link}
                disableGutters
                onClick={toggleDrawer}
              >
                <NavLink
                  exact
                  to={handleUserLinks.login.path}
                  className={classes.navLink}
                  activeClassName={classes.activeLink}
                >
                  <ListItemIcon className={classes.listItemIcon}>
                    {handleUserLinks.login.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={handleUserLinks.login.name}
                    className={classes.listItemText}
                  />
                </NavLink>
              </ListItem>
              <ListItem
                button
                className={classes.link}
                disableGutters
                onClick={() => setOpenSidebar(false)}
              >
                <NavLink
                  exact
                  to={handleUserLinks.register.path}
                  className={classes.navLink}
                  activeClassName={classes.activeLink}
                >
                  <ListItemIcon className={classes.listItemIcon}>
                    {handleUserLinks.register.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={handleUserLinks.register.name}
                    className={classes.listItemText}
                  />
                </NavLink>
              </ListItem>
              <Divider />
            </>
          )}
          <List>
            {navLinks.map((link, i) => (
              <ListItem
                button
                className={classes.link}
                key={i}
                disableGutters
                onClick={() => setOpenSidebar(false)}
              >
                <NavLink
                  exact
                  to={link.path}
                  className={classes.navLink}
                  activeClassName={classes.activeLink}
                >
                  <ListItemIcon className={classes.listItemIcon}>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link.name}
                    className={classes.listItemText}
                  />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
