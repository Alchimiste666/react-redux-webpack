import Immutable from 'immutable';
import { FETCH_PHOTOS } from '../actions/photos.actions';

const initialState = Immutable.fromJS({
    photosGallery: []
});

const photosReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_PHOTOS: {
            return state.set('photosGallery', action.payload.photosGallery);
        }

        default: {
            return state;
        }
    }

};

export default photosReducer;
