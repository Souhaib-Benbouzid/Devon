// import { DropdownButton, Dropdown } from 'react-bootstrap';

// const LanguagePicker = ({ lang, setLanguage }) => {
//   const { t, i18n } = useTranslation();

//   const changeLang = (val) => {
//     setLanguage(val);
//     i18n.changeLanguage(val);
//   };

//   return (
//     <>
//       <DropdownButton id='dropdown-basic-button' title={lang}>
//         {languages.map((language, i) => (
//           <Dropdown.Item
//             eventKey={language.eventKey}
//             key={i}
//             onSelect={changeLang}
//           >
//             {language.name}
//           </Dropdown.Item>
//         ))}
//       </DropdownButton>
//     </>
//   );
// };

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { actionTypes } from '../../redux/constants';
// import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

export const LanguagePicker = ({ props }) => {
  // const { t, i18n } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.layout.language);

  const handleChange = (event) => {
    dispatch({
      type: actionTypes.CHANGE_LANGUAGE,
      payload: event.target.value,
    });
  };

  return (
    <div {...props}>
      <FormControl>
        <Select
          value={language}
          onChange={handleChange}
          className={classes.selectEmpty}
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
