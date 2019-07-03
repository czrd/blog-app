import React from 'react';
import { Provider } from 'react-redux';
import ConnectedFilterList from '../containers/ConnectedFilterList';
import ConnectedPostList from '../containers/ConnectedPostList';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <h1>React/Redux blog</h1>
      <div>
        <ConnectedPostList />
      </div>
      <div>
        <ConnectedFilterList />
      </div>
    </div>
  </Provider>
);

export default App;
