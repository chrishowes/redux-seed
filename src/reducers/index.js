import ApiReducer from './api';
import RouteReducer from './route';
import UiReducer from './ui';

module.exports = {
  ui: UiReducer,
  posts: ApiReducer.posts,
  routing: RouteReducer,
};

