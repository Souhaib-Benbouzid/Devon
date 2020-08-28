import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LanguagePicker } from '../../components/language-picker';
import Hidden from '@material-ui/core/Hidden';
import { useTranslation } from 'react-i18next';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    zIndex: 400,
    padding: '2%',
    color: theme.palette.text.primary,
    opacity: 0.8,
    flexWrap: 'row-revers',
    marginTop: 'auto',
    alignItems: 'flex-end',
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
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  footerLink: {
    display: 'inline-flex',
    textDecoration: 'none',
    padding: '0 10px',
    color: theme.palette.text.primary,
    opacity: 0.8,
    '&:hover': {
      opacity: '1',
    },
  },
}));

export default function Footer({ footer: { links, copyright } }) {
  const classes = useStyle();
  const { t } = useTranslation();
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
            {t(link.name)}
          </a>
        ))}
        <Hidden smDown>
          <LanguagePicker className={classes.footerLink} />
        </Hidden>
      </div>
    </div>
  );
}
