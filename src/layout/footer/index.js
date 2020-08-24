import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '4%',
    color: theme.palette.text.primary,
    opacity: 0.8,
    flexWrap: 'row-revers',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  copyright: {
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '4%',
    },
  },
  footerLink: {
    textDecoration: 'none',
    padding: '0 10px',
    color: theme.palette.text.primary,
    opacity: 0.8,
    '&:hover': {
      opacity: '1',
    },
  },
}));

const footer = {
  links: [
    { path: 'https://www.sohaibbenbouzid.com/', name: 'Hire Me' },
    { path: 'https://www.sohaibbenbouzid.com/', name: 'About Us' },
    { path: 'https://www.sohaibbenbouzid.com/', name: 'Blog' },
    { path: 'https://www.sohaibbenbouzid.com/', name: 'Licence' },
  ],
  copyright: {
    date: '2020',
    text: 'Sohaib Benbouzid',
    link: 'https://www.sohaibbenbouzid.com',
  },
};

export default function Footer({ footer: { links, copyright } }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.copyright}>
        &copy; {copyright.date}{' '}
        <a href={copyright.link} className={classes.footerLink}>
          {copyright.text}
        </a>
      </div>
      <div className={classes.links}>
        {links.map((link, i) => (
          <a href={link.path} key={i} className={classes.footerLink}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
