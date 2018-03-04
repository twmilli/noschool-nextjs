import {
  SET_REGION,
  CLEAR_FILTERS,
} from '../actions/types';

const INITIAL_STATE = {
  'North America': true,
  'South America': true,
  Africa: true,
  Europe: true,
  Asia: true,
  Australia: true,
  Arctic: true,
  'Middle East': true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_REGION: {
      return {
        ...state,
        [action.payload]: !(state[action.payload]),
      };
    }
    case CLEAR_FILTERS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

