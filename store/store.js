import { createStore } from 'redux';
import rootReducer from '../reducers';


const initialState = {};
const enhancers = [];


const store = createStore(
  rootReducer,
  initialState,
);

export default store;
