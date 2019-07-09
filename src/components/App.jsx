import React from 'react';
import { Provider } from 'react-redux';
import ConenctedErrorMessage from '../containers/ConnectedErrorMessage';
import ConnectedFilterList from '../containers/ConnectedFilterList';
import ConnectedLoading from '../containers/ConnectedLoading';
import ConnectedPostList from '../containers/ConnectedPostList';
import DevTools from '../containers/DevTools';

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
      <div>
        <ConnectedLoading />
      </div>
      <div>
        <ConenctedErrorMessage />
      </div>
    </div>
    {process.env.NODE_ENV !== 'production' && <DevTools />}
  </Provider>
);

export default App;
