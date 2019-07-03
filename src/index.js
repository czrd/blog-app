import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createPost, createUser } from './actions';
import App from './components/App';
import appReducer from './reducers';
import DevTools from './containers/DevTools';
import { compose } from 'redux';
import { persistState } from 'redux-devtools';

function getSessionKey() {
  const matches = window.location.href.match(/[?&]debug=([^&#]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}

const enhancer = compose(
  DevTools.instrument(),
  persistState(getSessionKey())
);

let store = createStore(appReducer, {}, enhancer);
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
