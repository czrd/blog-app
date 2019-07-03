import { persistState } from 'redux-devtools';
import DevTools from '../containers/DevTools';
import { createStore } from 'redux';
import appReducer from './reducers';
import { compose } from 'redux';

function getSessionKey() {
  const matches = window.location.href.match(/[?&]debug=([^&#]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}

const enhancer = compose(
  DevTools.instrument(),
  persistState(getSessionKey())
);

export default function configureStore(initialState) {
  return createStore(appReducer, initialState, enhancer);
}
