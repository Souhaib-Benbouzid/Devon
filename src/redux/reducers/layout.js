import { actionTypes } from '../constants';

const layoutInitialState = {
  darkMode: !!window.localStorage.getItem('darkMode'),
};

export const layout = (state = layoutInitialState, action) => {
  switch (action.type) {
    case actionTypes.ToggleDarkMode:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};
