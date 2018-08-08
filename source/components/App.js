import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import routes from '../routes';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div class="container">
                        <div class="row">
                            <Header />
                        </div>
                        <div class="row">
                            <div>{routes}</div>
                        </div>
                        <div class="row">
                            <Footer />
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
