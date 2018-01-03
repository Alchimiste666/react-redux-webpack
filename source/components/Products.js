import React from 'react';
import Product from './Product.js';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products.actions';

const mapStateToProps = (state) => ({ productsGallery: state.products.get('productsGallery') });

@connect(mapStateToProps)
export default class Products extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {
        const { productsGallery } = this.props;

        let mappedProductsGallery = [];

        if (productsGallery) {
            mappedProductsGallery = productsGallery.map(
                (product, index) => <Product key={index} id={product.id} label={product.label} imageUrl={product.imageUrl} />
            );
        }

        return (
            <div class="col-xs-12">
                <h1>Products</h1>
                <div class="row">
                    {mappedProductsGallery}
                </div>
            </div>
        );
    }

}