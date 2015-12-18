import ApiReducer from './api.js';
import RouteReducer from './route.js';

module.exports = {
  posts: ApiReducer.reducers.posts,
  routing: RouteReducer,
};

