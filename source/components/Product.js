import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class Product extends React.Component {

    static propTypes = {
        id: PropTypes.number,
        label: PropTypes.string,
        imageUrl: PropTypes.string
    }

    render() {
        const { id, label, imageUrl } = this.props;
        return (
            <div class="col-xs-12 col-sm-6 col-md-4">
                <Link to={`/products/${id}`}>
                    <img class="img-responsive img-rounded" src={imageUrl} alt={label} />
                    <h6>{label}</h6>
                </Link>
            </div>
        );
    }

}