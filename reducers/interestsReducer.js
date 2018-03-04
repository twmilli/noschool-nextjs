import {
  SET_INTEREST,
  CLEAR_FILTERS,
} from '../actions/types';

const INITIAL_STATE = {
  Travel: true,
  Coding: true,
  Music: true,
  Art: true,
  Technology: true,
  Medicine: true,
  Farming: true,
  Photography: true,
  Cooking: true,
  Service: true,
  Environment: true,
  Language: true,
  Outdoors: true,
  Business: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INTEREST: {
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

