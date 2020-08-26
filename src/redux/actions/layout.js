import { actionTypes } from '../constants';

export const toggleDarkMode = (payload) => ({
  type: actionTypes.ToggleDarkMode,
  payload,
});
