import React from 'react';

import DevTools from 'devtools';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore);

import reducers from 'reducers';
const reducer = combineReducers(reducers);
export default createStoreWithMiddleware(reducer);