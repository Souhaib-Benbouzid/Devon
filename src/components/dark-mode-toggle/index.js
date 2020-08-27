import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../redux/actions/layout';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    color: theme.palette.secondary.light,

    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.secondary.light,
      '& + $track': {
        backgroundColor: theme.palette.common.black,
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}));

export default function DarkModeToggle(props) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.layout.darkMode);
  const toggle = () => {
    dispatch(toggleDarkMode());
  };
  const classes = useStyles();
  return (
    <>
      <Switch
        type='checkbox'
        checked={darkMode === 'on' ? true : false}
        className={classes.root}
        onClick={toggle}
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
      {darkMode === 'on' ? '🌞' : '🌜'}
    </>
  );
}
