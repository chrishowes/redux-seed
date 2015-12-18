import React from 'react';
import ReactDOM from 'react-dom';

import Store from 'store';
import { Provider } from 'react-redux';

// router stuff
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
const history = createHistory();
syncReduxAndRouter(history, Store);

// import components as pages here
import IndexPage from 'components/indexPage';

import DevTools from 'devtools';

// routes go here
const Application = (
  <div>
    <Provider store={ Store }>
      <Router>
        <Route path="/" component={IndexPage} />
      </Router>
    </Provider>
    <DevTools store={ Store }/>
  </div>
);

ReactDOM.render(Application, document.getElementById('root'));


