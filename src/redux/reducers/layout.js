import { actionTypes } from '../constants';

const layoutInitialState = {
  darkMode: localStorage.getItem('darkMode')
    ? localStorage.getItem('darkMode')
    : 'off',
  language: 'en',
};

console.log(localStorage.getItem('darkMode'));

export const layout = (state = layoutInitialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case actionTypes.ToggleDarkMode:
      localStorage.setItem('darkMode', state.darkMode === 'off' ? 'on' : 'off');
      return { ...state, darkMode: state.darkMode === 'off' ? 'on' : 'off' };
    default:
      return state;
  }
};
