import { SELECT_PRICE } from '../actions/index';
import data from '../components/content/content_data';

export default function(state = data.pricing[0][0], action) { 

    switch(action.type) {
        case SELECT_PRICE:
            return action.payload;
        default: 
            return state;
    }
}