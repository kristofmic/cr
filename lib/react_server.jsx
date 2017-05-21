import Bluebird from 'bluebird';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { match, RouterContext } from 'react-router';

import { Provider } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function reactRouterServer(location, headers, routes, store) {
  return new Bluebird((resolve, reject) => {
    match({ routes, location }, handleMatch);

    function handleMatch(err, redirect, renderProps) {
      if (err) {
        return reject(err);
      }

      if (redirect) {
        const redirectPath = `${redirect.pathname}${redirect.search}`;
        return resolve({ redirectPath });
      }

      const muiTheme = getMuiTheme({
        userAgent: headers['user-agent']
      });

      const body = ReactDOMServer.renderToString(
        <Provider store={store}>
          <MuiThemeProvider muiTheme={muiTheme}>
            <RouterContext {...renderProps} />
          </MuiThemeProvider>
        </Provider>
      );
      resolve({ body });
    }
  });
}
