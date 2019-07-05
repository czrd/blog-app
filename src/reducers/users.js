import { CREATE_USER, FETCH_USER_SUCCESS } from '../actionTypes';

export default function usersReducer(state = [], action) {
  const { type, ...user } = action;
  switch (type) {
    case CREATE_USER: {
      return [...state, user];
    }
    case FETCH_USER_SUCCESS: {
      return [...state, action.result];
    }
    default:
      return state;
  }
}
