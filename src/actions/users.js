import { CREATE_USER, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../actionTypes';
import { thunkCreator } from './utils';

export const createUser = (username, realname) => {
  return {
    type: CREATE_USER,
    username,
    realname
  };
};

export const fetchUser = username =>
  thunkCreator({
    types: [FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
    promise: fetch(`http://localhost:8080/api/users/${username}`).then(response => response.json())
  });

export const fetchUsersByUsernames = uernames => dispatch => {
  Promise.all(usernames.map(username => fetchUser(username)(dispatch)));
};
