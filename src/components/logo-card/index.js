import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100px',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '10px',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    marginRight: 'auto',
    flex: 1,
  },
  logoLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

export default function Logo({ logo, setOpenSidebar, isSidebar }) {
  const classes = useStyles();
  return isSidebar ? (
    <div className={classes.root}>
      <Link
        exact
        to={logo.path ? logo.path : '/'}
        onClick={setOpenSidebar ? () => setOpenSidebar(false) : null}
        className={classes.logoLink}
      >
        {logo.icon}
        <Typography variant='h5' color='inherit'>
          {logo.name}
        </Typography>
      </Link>
    </div>
  ) : (
    <Link
      exact
      to={logo.path ? logo.path : '/'}
      onClick={setOpenSidebar ? () => setOpenSidebar(false) : null}
      className={classes.navbar}
    >
      {logo.icon}
      <Typography variant='h5' color='inherit'>
        {logo.name}
      </Typography>
    </Link>
  );
}
