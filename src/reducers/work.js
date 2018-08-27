import { ADD_WORKS } from '../actions/add_works';

function workReducer(state = {}, action) {
  let newState = state;
  switch(action.type) {
    case ADD_WORKS : {
    	newState = { ...action.payload };	
      return newState;
    }
    default : return newState;
  }
}

export default workReducer;