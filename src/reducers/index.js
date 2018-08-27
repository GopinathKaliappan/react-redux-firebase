import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import workReducer from './work';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  works: workReducer
});

export default rootReducer;
