import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    height: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },
}));

export default function Main({ children, ...rest }) {
  const classes = useStyle();
  return <div className={classes.root}>{children}</div>;
}
