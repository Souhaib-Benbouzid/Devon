import { actionTypes } from '../constants';

export const toggleDarkMode = () => ({
  type: actionTypes.ToggleDarkMode,
});

export const changeLanguage = (language) => ({
  type: actionTypes.CHANGE_LANGUAGE,
  payload: language,
});
