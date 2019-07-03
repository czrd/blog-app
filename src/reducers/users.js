import { CREATE_USER } from '../actionTypes';

export default (usersReducer = (state = [], action) => {
  const { type, ...user } = action;
  switch (type) {
    case CREATE_USER: {
      return [...state, user];
    }
    default:
      return state;
  }
});
