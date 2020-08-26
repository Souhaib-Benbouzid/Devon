import './assets/scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import { AuthProvider } from './auth';

import { Theme } from './theme';
import Layout from './layout';
import Routes from './router';

import store from './redux';

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <Router>
        <Theme darkMode={false}>
          <Layout>
            <Routes />
          </Layout>
        </Theme>
      </Router>
    </Provider>
  </AuthProvider>,
  document.getElementById('root')
);
