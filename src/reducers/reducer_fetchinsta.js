import { FETCH_INSTA } from '../actions/index';

export default function(state = {}, action) { 

    switch(action.type) {
        case FETCH_INSTA:
            if (action.payload.data) {
                return action.payload.data.data.map(el => {
                    return [el.type, el.images.low_resolution.url, el.likes.count, el.link];
                });
            } else {
                return state;
            }
        default: 
            return state;
    }
}