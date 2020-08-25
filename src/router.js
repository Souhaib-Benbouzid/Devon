import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './pages/landing';
import Register from './pages/register';
import Login from './pages/login';

import FirebaseProvider from './firebase/firebase-provider';

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },
];

export const App = () => {
  return (
    <FirebaseProvider>
      {routes.map((route, i) => (
        <Route exact {...route} key={i} />
      ))}
    </FirebaseProvider>
  );
};
export default App;
