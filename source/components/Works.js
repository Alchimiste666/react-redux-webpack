import 'react-image-gallery/styles/css/image-gallery';

import React from 'react';
import ImageGallery from 'react-image-gallery';
import Product from './Product.js';
import { connect } from 'react-redux';
import { fetchWorks } from '../actions/works.actions';
import loremIpsum from 'lorem-ipsum';

const mapStateToProps = (state) => ({ worksGallery: state.works.get('worksGallery') });

@connect(mapStateToProps)
export default class Works extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchWorks());
    }

    render() {
        const { worksGallery } = this.props;

        const mappedWorksGallery = [];

        if (worksGallery) {
            worksGallery.map(
                work => mappedWorksGallery.push({ original: work.imageUrl, thumbnail: work.imageUrl, description: work.label })
            );
        }

        const randomText = loremIpsum({ count: 10 });

        return (
            <div class='col-xs-12'>
                <h1>Works</h1>
                <br />
                <div class='row'>
                    <div class='col-xs-12 col-sm-10 col-sm-offset-1  col-md-8 col-md-offset-2'>
                        <ImageGallery items={mappedWorksGallery} slideInterval={3000} autoPlay={true} />
                    </div>
                </div>
                <br />
                <p>{randomText}</p>
            </div>
        );

    }
}