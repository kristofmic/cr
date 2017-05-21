/* global document */
/* eslint import/first: 0 */

require('es6-promise').polyfill();

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import router from './route/router';
import { createStore } from './store';

if (process.env.BROWSER) {
  require('./styles/index.scss');
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore();

const entry = (
  <Provider store={store}>
    <MuiThemeProvider>
      {router}
    </MuiThemeProvider>
  </Provider>
);

// Bind app to the DOM
ReactDOM.render(entry, document.getElementById('entry'));
