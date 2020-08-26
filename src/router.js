import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './private-route';

import Landing from './pages/landing';
import Register from './pages/register';
import Login from './pages/login';

const Test = () => (
  <div>
    i'm private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm privatei'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm privatei'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm privatei'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm privatei'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm privatei'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private i'm private i'm private i'm private i'm private i'm private i'm
    private
  </div>
);

const routes = [
  {
    path: '/',
    component: Landing,
    private: false,
  },
  {
    path: '/private',
    component: Test,
    private: true,
  },
  {
    path: '/register',
    component: Register,
    private: false,
  },
  {
    path: '/login',
    component: Login,
    private: false,
  },
];

export const App = () => {
  return (
    <>
      {routes.map((route, i) =>
        route.private ? (
          <PrivateRoute exact {...route} key={i} />
        ) : (
          <Route exact {...route} key={i} />
        )
      )}
    </>
  );
};
export default App;
