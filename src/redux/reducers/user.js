import { actionTypes } from '../constants';

const layoutInitialState = {
  loading: true,
  user: {
    email: '',
    displayName: '',
  },
  error: '',
};

export const user = (state = layoutInitialState, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT_USER:
      return { ...state, ...action.payload };

    case actionTypes.LOGIN_USER_SUCCESS:
      return { ...state, ...action.payload };
    case actionTypes.LOGIN_USER_REQUEST:
      return { ...state, ...action.payload };
    case actionTypes.LOGIN_USER_FAILURE:
      return { ...state, ...action.payload };

    case actionTypes.REGISTER_USER_SUCCESS:
      return { ...state, ...action.payload };
    case actionTypes.REGISTER_USER_REQUEST:
      return { ...state, ...action.payload };
    case actionTypes.REGISTER_USER_FAILURE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
