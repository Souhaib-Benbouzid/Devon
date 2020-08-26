import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelect } from 'react-redux';

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const user = useSelect((state) => state.user);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? <RouteComponent {...routeProps} /> : <Redirect to={'/login'} />
      }
    />
  );
};
