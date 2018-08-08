import Immutable from 'immutable';
import { 
    FETCH_PRODUCT, FETCH_PRODUCT_FULFILLED, FETCH_PRODUCT_REJECTED,
    FETCH_PRODUCTS, FETCH_PRODUCTS_FULFILLED, FETCH_PRODUCTS_REJECTED
} from '../actions/products.actions';

const initialState = Immutable.fromJS({
    loading: false,
    productsGallery: [],
    selectedProduct: {}
});

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_PRODUCTS: {
            return state.set('loading', true);
        }

        case FETCH_PRODUCTS_FULFILLED: {
            return state.set('productsGallery', action.payload.data).set('loading', false);
        }
        
        case FETCH_PRODUCTS_REJECTED: {
            return state.set('error', action.payload.message).set('loading', false);
        }

        case FETCH_PRODUCT: {
            return state.set('loading', true);
        }

        case FETCH_PRODUCT_FULFILLED: {
            return state.set('selectedProduct', action.payload.selectedProduct).set('loading', false);
        }

        case FETCH_PRODUCT_REJECTED: {
            return state.set('error', action.payload.message).set('loading', false);
        }

        default: {
            return state;
        }
    }

};

export default productReducer;
