import { createStore } from 'redux';
import { createPost, createUser } from './actions';
import appReducer from './reducers';

let store = createStore(appReducer);
store.subscribe(() => {
  console.log('state changed: ', store.getState());
});
console.log(store.getState());

store.dispatch(createUser('dan', 'Daniel Bugl'));
store.dispatch(createUser('des', 'Destiny'));

store.dispatch(
  createPost('dan', {
    title: 'First post',
    text: 'Hello world! This is the first blog post.',
    category: 'welcome'
  })
);

store.dispatch(
  createPost('des', {
    title: 'Another test',
    text: 'This is another test blog post.',
    category: 'test'
  })
);
