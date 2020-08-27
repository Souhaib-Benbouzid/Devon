import React, { useState, useContext } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import { MdLockOutline } from 'react-icons/md';

import { auth } from '../../firebase';
import { AuthContext } from '../../auth';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../redux/actions/user';

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

const Form = ({ isLogin, history }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { error, data, isAuth } = useSelector((state) => state.user);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setValues({
      name: '',
      email: '',
      password: '',
      isSubmitting: false,
    });
  };

  const handleError = (error) => {
    switch (error.code) {
      case 'auth/user-not-found':
        setFormError('there is no user with this information');
        break;
      case 'auth/weak-password':
        setFormError('weak password.');
        break;
      case 'auth/email-already-in-use':
        setFormError('This email is already in use. Please login');
        break;
      case 'auth/wrong-password':
        setFormError('Wrong Credentials');
        break;

      default:
        console.log(error.code);
        setFormError('something went wrong');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    isLogin
      ? dispatch(login(values.email, values.password))
      : dispatch(register(values.name, values.email, values.password));

    // clean form
    resetForm();
    setIsSubmitting(false);
  };

  if (isAuth) {
    return <Redirect to='/private' />;
  }

  return (
    <Paper elevation={1} className={classes.root}>
      <Avatar className={classes.avatar}>
        <MdLockOutline />
      </Avatar>
      <Typography variant='h6'>{isLogin ? 'Log In' : 'Register'}</Typography>
      <Typography variant='body2'>{error}</Typography>
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
          autoComplete='off'
        />
        <Button
          disabled={isSubmitting}
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

export default withRouter(Form);
