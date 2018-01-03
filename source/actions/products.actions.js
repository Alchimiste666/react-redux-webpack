import axios from 'axios';
import { createAction } from 'redux-actions';
import { filter, first } from 'lodash';

const FETCH_PRODUCT = 'FETCH_PRODUCT';
const FETCH_PRODUCT_FULFILLED = 'FETCH_PRODUCT_FULFILLED';
const FETCH_PRODUCT_REJECTED = 'FETCH_PRODUCT_REJECTED';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED';
const FETCH_PRODUCTS_REJECTED = 'FETCH_PRODUCTS_REJECTED';

const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
  payload: axios.get('/products.json')
});

const fetchProduct = createAction(FETCH_PRODUCT, async (productId) => {
  const { data } = await axios.get('/products.json');
  let selectedProduct = first(filter(data, { id: parseInt(productId) }));
  return { selectedProduct };
});

export {
  fetchProduct, FETCH_PRODUCT, FETCH_PRODUCT_FULFILLED, FETCH_PRODUCT_REJECTED,
  fetchProducts, FETCH_PRODUCTS, FETCH_PRODUCTS_FULFILLED, FETCH_PRODUCTS_REJECTED
};
