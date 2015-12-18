import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducers from 'reducers';
const reducer = combineReducers(reducers);
const store = createStore(reducer);

// router stuff
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
const history = createHistory();
syncReduxAndRouter(history, store);

// import components as pages here
import IndexPage from 'components/indexPage';

// routes go here
const Application = (
  <div>
    <Provider store={ store }>
      <Router>
        <Route path="/" component={IndexPage} />
      </Router>
    </Provider>
  </div>
);

ReactDOM.render(Application, document.getElementById('root'));
