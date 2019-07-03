import { CREATE_POST, EDIT_POST } from '../actionTypes';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_POST: {
      const { type, post } = action;
      const ts = Date.now();
      return [...state, { ...post, created: ts, updated: ts }];
    }
    case EDIT_POST: {
      const { type, id, post } = action;
      return state.map((oldPost, index) => (id === index ? { ...oldPost, ...post, updated: Date.now() } : oldPost));
    }
    case DELTE_POST: {
      const { type, id } = action;
      return state.filter((post, index) => action.id !== index);
    }
    default:
      return state;
  }
};
