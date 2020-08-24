import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './pages/landing';

const routes = [
  {
    path: '/',
    component: Landing,
  },
];

export const App = () => {
  return (
    <>
      {routes.map((route, i) => (
        <Route exact {...route} key={i} />
      ))}
    </>
  );
};
export default App;
