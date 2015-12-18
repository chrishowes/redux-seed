// redux
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

// middlware
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

import reducers from 'reducers';
const reducer = combineReducers(reducers);
export default createStoreWithMiddleware(reducer);