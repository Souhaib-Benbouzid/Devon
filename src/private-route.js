import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { checkLogin } from './redux/actions/user';

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? <RouteComponent {...routeProps} /> : <Redirect to={'/login'} />
      }
    />
  );
};
