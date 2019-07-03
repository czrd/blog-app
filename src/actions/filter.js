import { CLEAR_FILTER, SET_FILTER } from '../actionTypes';

export const setFilter = filter => ({ type: SET_FILTER, filter });
export const clearFilter = () => ({ type: CLEAR_FILTER });
