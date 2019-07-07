import { combineReducers } from 'redux';
import filterReducer from './filter';
import postsReducer from './posts';
import loadingReducer from './loading';
import usersReducer from './users';

const appReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  filter: filterReducer,
  loading: loadingReducer
});

export default appReducer;
