import {
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS
} from '../actionTypes';
import { thunkCreator } from './utils';
import { fetchUsersByUsernames } from './users';

export const createPost = (user, post) => {
  const { title, text, category = 'random' } = post;
  if (!title || !text) {
    throw new Error('invalid post, title and text are required');
  }

  return {
    type: CREATE_POST,
    post: { user, title, text, category }
  };
};

export const editPost = (id, post) => {
  return {
    type: EDIT_POST,
    id,
    post
  };
};

export const deletePost = id => {
  return {
    DELETE_POST,
    id
  };
};

export const fetchPosts = () =>
  thunkCreator({
    types: [FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE],
    promise: fetch('http://localhost:8080/api/posts').then(response =>
      response.json()
    )
  });

const getUsernamesFromPosts = posts => {
  posts.reduce((usernames, post) => {
    if (!usernames.include(post.user)) {
      return [...usernames, post.user];
    }
    return usernames;
  }, []);
};

export const fetchPostsAndUsers = () => dispatch =>
  fetchPosts()(dispatch)
    .then(getUsernamesFromPosts)
    .then(usernames => fetchUsersByUsernames(usernames)(dispatch))
    .catch(err => console.err('could not fetch posts and users:', err.message));
