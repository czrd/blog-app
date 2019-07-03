import React from 'react';
import ReactDOM from 'react-dom';
import { createPost, createUser } from './actions';
import App from './components/App';
import configureStore from './store';

const store = configureStore();
const initialState = store.getState();

if (!initialState.users || initialState.users.length === 0) {
  store.dispatch(createUser('dan', 'Daniel'));
  store.dispatch(createUser('john', 'John'));
}

if (!initialState.posts || initialState.posts.length === 0) {
  store.dispatch(
    createPost('dan', {
      title: 'hello',
      text: 'hello, world!',
      category: 'tech'
    })
  );
  store.dispatch(
    createPost('john', {
      title: "John's post",
      text: 'hi!',
      category: 'math'
    })
  );
}

ReactDOM.render(<App store={store} />, document.getElementById('root'));
