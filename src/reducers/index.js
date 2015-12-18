import ApiReducer from './api';
import RouteReducer from './route';

module.exports = {
  posts: ApiReducer.posts,
  routing: RouteReducer,
};

