import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import toggleNav from './reducer_togglenav';
import fetchInsta from './reducer_fetchinsta';
import setDate from './reducer_setdate';
import fetchTrainings from './reducer_fetchtrainings';
import selectPrice from './reducer_selectprice';

const rootReducer = combineReducers({
    isNavOpen: toggleNav,
    insta: fetchInsta,
    activeDate: setDate,
    trainings: fetchTrainings,
    form: formReducer,
    selectedPrice: selectPrice
});

export default rootReducer;
