import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ToggleDarkMode from '../../components/dark-mode-toggle';
import { MdAccountCircle, MdMenu } from 'react-icons/md';
import LogoCard from '../../components/logo-card';
import { AuthContext } from '../../auth';
import { auth } from '../../firebase';

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: 'auto',
  },
  navbar: {
    display: 'flex',
    flex: 10,
    justifyContent: 'center',
  },
  logger: {
    flex: 1,
    marginRight: theme.spacing(2),
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    margin: '10px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  activeLink: {
    color: theme.palette.secondary.light,
  },
  icon: {
    color: theme.palette.text.primary,
  },
}));

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Slide appear={true} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function ({
  setOpenSidebar,
  navLinks,
  handleUserLinks,
  Logo,
  ...props
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentUser } = useContext(AuthContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar className={classes.root} color='inherit' elevation={0}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={setOpenSidebar}
            >
              <MdMenu className={classes.icon} />
            </IconButton>
          </Hidden>
          <LogoCard logo={Logo} />

          <Hidden mdDown>
            <div className={classes.navbar}>
              {navLinks.map((link, i) => (
                <NavLink
                  exact
                  className={classes.navLink}
                  activeClassName={classes.activeLink}
                  to={link.path}
                  key={i}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <ToggleDarkMode />
          </Hidden>

          {currentUser ? (
            <>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                color='inherit'
                onClick={handleMenu}
              >
                <MdAccountCircle className={classes.icon} />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  {' '}
                  <Typography type='submit' variant='text'>
                    Profile
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography
                    type='submit'
                    variant='text'
                    onClick={() => auth.signOut()}
                  >
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <NavLink
                exact
                className={classes.navLink}
                activeClassName={classes.activeLink}
                to={handleUserLinks.login.path}
              >
                <Hidden mdDown>{handleUserLinks.login.icon}</Hidden>
                {handleUserLinks.login.name}
              </NavLink>
              <NavLink
                exact
                className={classes.navLink}
                activeClassName={classes.activeLink}
                to={handleUserLinks.register.path}
              >
                <Hidden mdDown>{handleUserLinks.register.icon}</Hidden>
                {handleUserLinks.register.name}
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
