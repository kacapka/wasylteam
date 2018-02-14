import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import AppHome from './components/app_home';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter basename="/public">
      <AppHome />
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app-home'));
