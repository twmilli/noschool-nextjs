import { SET_BUDGET, SET_REGION, SET_INTEREST, SET_LENGTH, CLEAR_FILTERS, BOOKMARK } from './types';

export const setBudget = value => ({ type: SET_BUDGET, payload: value });
export const setRegion = e => (
  { type: SET_REGION, payload: e.target.dataset.label || e.target.parentNode.dataset.label }
);

export const setInterest = e => (
  { type: SET_INTEREST, payload: e.target.dataset.label || e.target.parentNode.dataset.label }
);

export const setLength = value => ({ type: SET_LENGTH, payload: value });

export const clearFilters = () => ({ type: CLEAR_FILTERS });

export const bookmark = program => ({ type: BOOKMARK, payload: program });
