import Immutable from 'immutable';
import { FETCH_WORKS, FETCH_WORKS_ON_NEXT, FETCH_WORKS_ON_ERROR, FETCH_WORKS_ON_COMPLETED } from '../actions/works.actions';

const initialState = Immutable.fromJS({
    worksGallery: []
});

const worksReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_WORKS: {
            return state.set('loading', true);
        }

        case FETCH_WORKS_ON_NEXT: {
            return state.set('worksGallery', action.data.response);
        }

        case FETCH_WORKS_ON_ERROR: {
            return state.set('error', action.err.message).set('loading', false);
        }

        case FETCH_WORKS_ON_COMPLETED: {
            return state.set('loading', false);
        }

        default: {
            return state;
        }
    }

};

export default worksReducer;
