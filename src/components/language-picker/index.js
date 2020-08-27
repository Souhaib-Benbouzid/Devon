import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { actionTypes } from '../../redux/constants';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    padding: '3px',
  },
}));

export const LanguagePicker = ({ props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.layout.language);
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    dispatch({
      type: actionTypes.CHANGE_LANGUAGE,
      payload: event.target.value,
    });
    console.log('en');
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div {...props} className={classes.root}>
      <FormControl>
        <Select
          value={language}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'ar'}>عربي</MenuItem>
          <MenuItem value={'fr'}>Francais</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
