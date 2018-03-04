import {
  SET_BUDGET,
  CLEAR_FILTERS,
} from '../actions/types';

const INITIAL_STATE = {
  min: 0,
  max: 20000,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BUDGET:
      return { min: action.payload[0], max: action.payload[1] };
    case CLEAR_FILTERS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
