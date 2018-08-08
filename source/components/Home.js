import React from 'react';
import Carousel from 'nuka-carousel';
import Product from './Product.js';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/photos.actions';
import loremIpsum from 'lorem-ipsum';

const mapStateToProps = (state) => (
    { photosGallery: state.photos.get('photosGallery') }
);

class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPhotos());
    }

    render() {
        const randomText = loremIpsum({ count: 30 });

        const { photosGallery } = this.props;

        let mappedPhotosGallery = [];

        if (photosGallery) {
            mappedPhotosGallery = photosGallery.map(
                photo => <img key={photo.id} src={photo.imageUrl} alt={photo.label} />
            );
        }

        return (
            <div class="col-xs-12">
                <h1>Who we are</h1>
                <br />
                <div class="col-xs-12 col-sm-8 col-md-7">
                    <p>{randomText}</p>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-5">
                    <Carousel autoplay={true} wrapAround={true} autoplayInterval={2000}>
                        {mappedPhotosGallery}
                    </Carousel>
                </div>
                <br />
            </div>
        );

    }
}

export default connect(mapStateToProps)(Home);