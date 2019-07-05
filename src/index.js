import React from 'react';
import ReactDOM from 'react-dom';
import { createUser, fetchPosts } from './actions';
import App from './components/App';
import configureStore from './store';

if (module.hot) {
  module.hot.accept();
}

const store = configureStore();
const initialState = store.getState();

if (!initialState.users || initialState.users.length === 0) {
  store.dispatch(createUser('dan', 'Daniel'));
  store.dispatch(createUser('john', 'John'));
}

store.dispatch(fetchPosts());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
