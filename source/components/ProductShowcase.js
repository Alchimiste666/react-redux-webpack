import React from 'react';

import { Link } from 'react-router';

import { connect } from 'react-redux';
import { fetchProduct } from '../actions/products.actions';

import loremIpsum from 'lorem-ipsum';

const mapStateToProps = (state) => ({ selectedProduct: state.products.get('selectedProduct') });

@connect(mapStateToProps)
export default class ProductShowcase extends React.Component {

    componentDidMount() {
        const { productId } = this.props.params;
        this.props.dispatch(fetchProduct(productId));
    }

    render() {
        const {label, imageUrl} = this.props.selectedProduct;
        const randomText = loremIpsum({ count: 10 });

        return (
            <div class="col-xs-12">
                <div class="row">
                    <h1>{label}</h1>
                    <br />
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-5">
                        <p>{randomText}</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-7">
                        <img src={imageUrl} class="img-responsive img-thumbnail" alt={label} />
                    </div>
                </div>
                <br />
                <Link to={'/products'}>
                    <h6>Back to products</h6>
                </Link>
            </div>
        );
    }

}