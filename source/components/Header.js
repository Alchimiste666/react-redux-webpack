import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-menu">
                        <span class="sr-only">Toggle navigation</span>Menu
                    </button>
                    <Link to={'/'} class="navbar-brand" activeClassName="active">Bear Society</Link>
                </div>
                <div id="navbar-collapse-menu" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="page-scroll">
                            <Link to={'/works'} activeClassName="active">Works</Link>
                        </li>
                        <li class="page-scroll">
                            <Link to={'/products'} activeClassName="active">Produts</Link>
                        </li>
                        <li class="page-scroll">
                            <Link to={'/location'} activeClassName="active">Location</Link>
                        </li>
                        <li class="page-scroll active">
                            <Link to={'/contacts'} activeClassName="active">Contacts</Link>
                        </li>
                        <li class="page-scroll active">
                            <Link to={'/registration'} class="btn btn-success btn-lg">Sign up</Link>
                        </li>
                    </ul>
                </div>
                <br />
            </div>
        );
    }
}
