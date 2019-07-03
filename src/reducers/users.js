import { CREATE_USER } from '../actionTypes';

export default function usersReducer(state = [], action) {
  const { type, ...user } = action;
  switch (type) {
    case CREATE_USER: {
      return [...state, user];
    }
    default:
      return state;
  }
}
