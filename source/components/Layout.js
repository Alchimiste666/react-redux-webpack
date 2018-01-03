import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Loading from 'react-loading';

export default class Layout extends React.Component {

    render() {
        return (
            <div class="container">
                <Loading type="spin" color="#527eaa" />
                <div class="row">
                    <Header />
                </div>
                <div class="row">
                    {this.props.children}
                </div>
                <div class="row">
                    <Footer />
                </div>
            </div>
        );
    }
}
