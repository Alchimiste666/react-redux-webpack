import 'babel-polyfill';

import React from 'react';

import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import routes from './routes';

render(
    <Provider store={store}>
        <Router>
            <div>{routes}</div>
        </Router>
    </Provider>
, document.getElementById("app"));
