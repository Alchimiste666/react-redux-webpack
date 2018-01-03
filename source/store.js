import { combineReducers, applyMiddleware, createStore } from 'redux';

import { reducer as formReducer } from 'redux-form';

import photosReducer from './reducers/photos.reducer';
import productsReducer from './reducers/products.reducer';
import worksReducer from './reducers/works.reducer';

import loggerMiddleware from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import observableMiddleware from 'redux-observable-middleware';

const rootReducer = combineReducers({
    form: formReducer,
    works: worksReducer,
    photos: photosReducer,
    products: productsReducer
});

const middlewares = applyMiddleware(loggerMiddleware, promiseMiddleware(), observableMiddleware);

const store = createStore(rootReducer, middlewares);

export default store;
