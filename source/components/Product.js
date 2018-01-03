import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

export default class Products extends React.Component {

    static propTypes = {
        id: PropTypes.number,
        label: PropTypes.string,
        imageUrl: PropTypes.string
    }

    render() {
        const { id, label, imageUrl} = this.props;
        return (
            <div class="col-xs-12 col-sm-6 col-md-4">
                <img class="img-responsive img-rounded" src={imageUrl} alt={label} />
                <Link to={`/products/${id}`}>
                    <h6>{label}</h6>
                </Link>
            </div>
        );
    }

}