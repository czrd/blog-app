import { CLEAR_FILTER, SET_FILTER } from '../actionTypes';

export default function filterReducer(state = false, action) {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    case CLEAR_FILTER: {
      return false;
    }
    default:
      return state;
  }
}
