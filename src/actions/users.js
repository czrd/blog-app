import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../actionTypes';
import { thunkCreator } from './utils';

export const createUser = (username, realname) =>
  thunkCreator({
    types: [CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE],
    promise: fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, realname })
    }).then(response => response.json())
  });

export const fetchUser = username =>
  thunkCreator({
    types: [FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
    promise: fetch(`http://localhost:8080/api/users/${username}`).then(response => response.json())
  });

export const fetchUsersByUsernames = usernames => dispatch => {
  Promise.all(usernames.map(username => fetchUser(username)(dispatch)));
};
