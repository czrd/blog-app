import { CLEAR_FILTER, SET_FILTER } from '../actionTypes';

const setFilter = filter => ({ type: SET_FILTER, filter });
const clearFilter = () => ({ type: CLEAR_FILTER });
