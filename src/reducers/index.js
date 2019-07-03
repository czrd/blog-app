import { combineReducers } from 'redux';
import filterReducer from './filter';
import postsReducer from './posts';
import usersReducer from './users';

const appReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  filter: filterReducer
});

export default appReducer;
