import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
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
  username: {
    margin: '5px',
  },
  email: {
    opacity: '0.7',
  },
}));

export default function UserCard({
  className,
  username,
  email,
  avatarUrl,
  ...rest
}) {
  const classes = useStyles();

  return (
    <div {...rest} className={`${classes.root} ${className}`}>
      <Avatar
        alt={username || 'username'}
        src={avatarUrl}
        className={classes.large}
      />
      <Typography variant='body1' className={classes.username}>
        {username}
      </Typography>
      {email ? (
        <Typography variant='body2' className={classes.email}>
          {email}
        </Typography>
      ) : null}
    </div>
  );
}
