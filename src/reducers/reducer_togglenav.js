import { TOGGLE_NAV } from '../actions/index';

export default function(state = 'nav-closed', action) {
     
    switch(action.type) {
        case TOGGLE_NAV:
            return action.payload;
        default: 
            return state;
    }
}