import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { MdLockOutline } from 'react-icons/md';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '40px 20px',
    maxWidth: '500px',
    textAlign: 'center',
    borderRadius: '12px',
  },
  form: {
    marginBottom: '10px',
  },
  avatar: {
    margin: 'auto',
    backgroundColor: theme.palette.secondary.main,
  },
  textField: {
    margin: '20px 0',
  },
  submit: {
    margin: '20px 0',
  },
  Link: {
    textDecoration: 'none',
    color: theme.palette.secondary.light,
    paddingLeft: '3px',
  },
}));

export const Form = ({ isLogin }) => {
  const classes = useStyle();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    isSubmitting: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    setValues({
      name: '',
      email: '',
      password: '',
      isSubmitting: false,
    });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <Paper elevation={1} className={classes.root}>
      <Avatar className={classes.avatar}>
        <MdLockOutline />
      </Avatar>
      <Typography variant='h6'>{isLogin ? 'Log In' : 'Register'}</Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        {isLogin ? null : (
          <TextField
            className={classes.textField}
            id='name'
            name='name'
            label='Name'
            value={values.name}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='Full Name'
            required
            variant='outlined'
          />
        )}
        <TextField
          className={classes.textField}
          id='email'
          name='email'
          label='Email'
          value={values.email}
          onChange={handleChange}
          type='email'
          fullWidth
          variant='outlined'
          placeholder='Your Email'
          InputLabelProps={{
            shrink: true,
          }}
          required
        />

        <TextField
          className={classes.textField}
          id='password'
          name='password'
          label='Password'
          value={values.password}
          onChange={handleChange}
          type='password'
          required
          variant='outlined'
          placeholder='strong password'
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        <Button
          disabled={values.isSubmitting}
          type='submit'
          color='secondary'
          variant='contained'
          fullWidth
          className={classes.submit}
        >
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </form>
      <Typography
        variant='body2'
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Link
          to='#'
          onClick={() => alert('reset password')}
          className={classes.Link}
        >
          Forget Password ?
        </Link>

        {isLogin ? (
          <Link to='/register' className={classes.Link}>
            You don't have an Account ? Create New Account
          </Link>
        ) : (
          <Link to='/login' className={classes.Link}>
            Already have an Account ? Login
          </Link>
        )}
      </Typography>
    </Paper>
  );
};

/* <form className={classes.root}>
      {values.map((value, i) => (
        <TextField {...value} key={i} />
      ))}
      <Button color='inherit' type='submit'  disabled={} />
    </form> */
