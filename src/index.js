import React from 'react';
import ReactDOM from 'react-dom';
import { createUser, fetchPosts, fetchPostsAndUsers } from './actions';
import App from './components/App';
import configureStore from './store';

if (module.hot) {
  module.hot.accept();
}

const store = configureStore();
store.dispatch(fetchPostsAndUsers());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
