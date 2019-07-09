import { combineReducers } from 'redux';
import errorReducer from './error';
import filterReducer from './filter';
import loadingReducer from './loading';
import postsReducer from './posts';
import usersReducer from './users';

const appReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default appReducer;
