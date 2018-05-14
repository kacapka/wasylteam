import axios from 'axios';
import moment from 'moment';

//set up moment in polish
moment.locale('pl');

//support function to create actual date
function returnDate(moment) {
    return {
        dayNum: moment.format('DD'),
        dayWord: moment.format('dddd'),
        month: moment.format('MMMM'),
        date: moment.format('L'),
        moment: moment
    }
}

export const TOGGLE_NAV = 'toggle_nav';
export const FETCH_INSTA = 'fetch_insta';
export const FETCH_TRAININGS = 'fetch_trainings';
export const SET_DATE = 'set_date';
export const SELECT_PRICE = 'select_price';
export const PLAN_TRANSITION = 'plan_transition';

//instagram access token
const ACCESS_TOKEN = '1718569605.1df0baa.16cb0565051842b68e8e667d5f6cfcca';
const URL_INSTA = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}&count=8`;

const URL_TRAININGS = './build/JSON/training_data.json';

//get trainings data
export function fetchTrainings() {
    const request = axios.get(URL_TRAININGS);
    
    return {
        type: FETCH_TRAININGS,
        payload: request
    }
}

//get instagram data
export function fetchInsta() {
    const request = axios.get(URL_INSTA);
    
    return {
        type: FETCH_INSTA,
        payload: request
    }
}

//toggle mobile nav
export function toggleNav(string) {
    let open;
    if (string === 'nav-closed') {
        open = 'nav-open';
    } else {
        open = 'nav-closed';
    }
    
    return {
        type: TOGGLE_NAV,
        payload: open
    }
}

//set actual date in plan section
export function setDate() { 
    const activeDate = returnDate(moment());
    
    return {
        type: SET_DATE,
        payload: activeDate
    }
}

//set day back 
export function setDateBack(moment) {
    const activeDate = returnDate(moment.subtract(1,'d'));
    
    return {
        type: SET_DATE,
        payload: activeDate
    }
}

//set day forward
export function setDateForward(moment) {
    const activeDate = returnDate(moment.add(1,'d'));
    
    return {
        type: SET_DATE,
        payload: activeDate
    }
}

//select price - payment box component
export function selectPrice(id) {
    
    return {
        type: SELECT_PRICE,
        payload: id
    }
}

//change direction for plan transition css
export function planTransition(direction) {
    
    return {
        type: PLAN_TRANSITION,
        payload: direction
    }
    
}