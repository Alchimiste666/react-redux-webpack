import React from 'react';
import Product from './Product.js';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products.actions';
import Loading from 'react-loading';


const mapStateToProps = (state) => ({
    loading: state.products.get('loading'),
    productsGallery: state.products.get('productsGallery')
});

class Products extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {
        const { productsGallery, loading } = this.props;

        let mappedProductsGallery = [];

        if (!loading && productsGallery) {
            mappedProductsGallery = productsGallery.map(
                (product, index) => <Product key={index} id={product.id} label={product.label} imageUrl={product.imageUrl} />
            );
        }

        return (
            <div class="col-xs-12">
                <h1>Products</h1>
                <div class="row">
                    {loading ? <Loading type="spin" color="#527eaa" /> : mappedProductsGallery}
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps)(Products);