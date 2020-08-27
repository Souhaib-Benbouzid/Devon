import './assets/scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';

import { Provider } from 'react-redux';

import { Theme } from './theme';
import Layout from './layout';
import Routes from './router';

import store from './redux';
import './i18next';

ReactDOM.render(
  <Suspense fallback={<div>Loading Language... </div>}>
    <Provider store={store}>
      <Router>
        <Theme darkMode={false}>
          <Layout>
            <Routes />
          </Layout>
        </Theme>
      </Router>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
