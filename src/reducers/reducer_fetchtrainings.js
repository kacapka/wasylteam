import { FETCH_TRAININGS } from '../actions/index';

export default function(state = [], action) { 

    switch(action.type) {
        case FETCH_TRAININGS:
            return action.payload.data ? action.payload.data : state; 
        default: 
            return state;
    }
}