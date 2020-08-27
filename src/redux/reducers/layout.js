import { actionTypes } from '../constants';

const layoutInitialState = {
  darkMode: localStorage.getItem('darkMode')
    ? localStorage.getItem('darkMode')
    : 'off',
};

console.log(localStorage.getItem('darkMode'));

export const layout = (state = layoutInitialState, action) => {
  switch (action.type) {
    case actionTypes.ToggleDarkMode:
      localStorage.setItem('darkMode', state.darkMode === 'off' ? 'on' : 'off');
      return { ...state, darkMode: state.darkMode === 'off' ? 'on' : 'off' };
    default:
      return state;
  }
};
