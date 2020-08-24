import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import Layout from './layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { Theme } from './theme';

ReactDOM.render(
  <Router>
    <Theme darkMode={true}>
      <Layout>
        <Routes />
      </Layout>
    </Theme>
  </Router>,
  document.getElementById('root')
);
