import { combineReducers } from 'redux';
import budgetReducer from './budgetReducer';
import regionsReducer from './regionsReducer';
import interestsReducer from './interestsReducer';
import lengthReducer from './lengthReducer';

export default combineReducers({
  budget: budgetReducer,
  regions: regionsReducer,
  interests: interestsReducer,
  length: lengthReducer,
});
