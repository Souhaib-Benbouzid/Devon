import { actionTypes } from '../constants';
import { auth } from '../../firebase';

// login
export const LOGIN_USER_REQUEST = () => ({
  type: actionTypes.LOGIN_USER_REQUEST,
  payload: { loading: true },
});

export const LOGIN_USER_SUCCESS = (email, displayName) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  payload: { loading: false, user: { email, displayName } },
});
export const LOGIN_USER_FAILURE = (error) => ({
  type: actionTypes.LOGIN_USER_FAILURE,
  payload: { loading: false, error },
});

// register
export const REGISTER_USER_REQUEST = () => ({
  type: actionTypes.REGISTER_USER_REQUEST,
  payload: { loading: false },
});
export const REGISTER_USER_SUCCESS = (email, displayName) => ({
  type: actionTypes.REGISTER_USER_SUCCESS,
  payload: { loading: true, user: { email, displayName } },
});
export const REGISTER_USER_FAILURE = (error) => ({
  type: actionTypes.REGISTER_USER_FAILURE,
  payload: { loading: false, error },
});

// logout

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(LOGIN_USER_REQUEST());
    await auth.signInWithEmailAndPassword(email, password);
    dispatch(
      LOGIN_USER_SUCCESS(auth.currentUser.email, auth.currentUser.displayName)
    );
  } catch (error) {
    dispatch(LOGIN_USER_FAILURE(error.message));
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(REGISTER_USER_REQUEST());
    await auth.createUserWithEmailAndPassword(email, password);
    await auth.currentUser.updateProfile({ displayName: name });

    dispatch(REGISTER_USER_SUCCESS(auth.currentUser));
  } catch (error) {
    dispatch(REGISTER_USER_FAILURE(error.message));
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: actionTypes.LOGOUT_USER,
    payload: { loading: false, user: { email: '', displayName: '' } },
  });
};
