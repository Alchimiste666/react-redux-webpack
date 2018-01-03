import { createAction } from 'redux-actions';
import { Observable } from 'rxjs';

const FETCH_WORKS = 'FETCH_WORKS';
const FETCH_WORKS_ON_NEXT = 'FETCH_WORKS_ON_NEXT';
const FETCH_WORKS_ON_ERROR = 'FETCH_WORKS_ON_ERROR';
const FETCH_WORKS_ON_COMPLETED = 'FETCH_WORKS_ON_ERROR';

const fetchWorks = () => ({
    type: FETCH_WORKS,
    observable: Observable.ajax({ method: 'GET', url: './works.json' })
});

export { FETCH_WORKS, FETCH_WORKS_ON_NEXT, FETCH_WORKS_ON_ERROR, FETCH_WORKS_ON_COMPLETED, fetchWorks };


window.Observable = Observable;