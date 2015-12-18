import reduxApi from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import fetch from 'isomorphic-fetch';

export default reduxApi({
  posts: '/posts'
}).init(adapterFetch(fetch), false, 'http://jsonplaceholder.typicode.com');
