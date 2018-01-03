import { createAction } from 'redux-actions';

const FETCH_PHOTOS = 'FETCH_PHOTOS';

const fetchPhotos = createAction(FETCH_PHOTOS, () => ({
    photosGallery: [
        { id: 1, label: 'Passion', imageUrl: 'images/space-wallpaper(4).jpg' },
        { id: 2, label: 'Exploring', imageUrl: 'images/space-wallpaper(5).jpg' },
        { id: 3, label: 'Technology', imageUrl: 'images/space-wallpaper(6).jpg' },
        { id: 4, label: 'Creation', imageUrl: 'images/space-wallpaper(7).jpg' }
    ]
}));

export { FETCH_PHOTOS, fetchPhotos };