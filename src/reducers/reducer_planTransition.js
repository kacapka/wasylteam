import { PLAN_TRANSITION } from '../actions/index';

export default function(state = '', action) {
     
    switch(action.type) {
        case PLAN_TRANSITION:
            return action.payload;
        default: 
            return state;
    }
}