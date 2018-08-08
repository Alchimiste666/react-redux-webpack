import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Works from './components/Works';
import Products from './components/Products';
import ProductShowcase from './components/ProductShowcase';
import Location from './components/Location';
import Contacts from './components/Contacts';
import Registration from './components/Registration';

const routes = (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/works" component={Works} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:productId" component={ProductShowcase} />
        <Route path="/location" component={Location} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/registration" component={Registration} />
        <Route path="*" component={Home} />
    </Switch>
);

export default routes;