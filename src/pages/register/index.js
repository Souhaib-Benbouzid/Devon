import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Form from '../../components/form';

const useStyle = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    margin: '60px 0',
    padding: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Register() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Form />
    </div>
  );
}
