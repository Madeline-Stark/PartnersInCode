import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const programmersReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PROGRAMMER_SUCCESS':
      return action.programmer;

    default:
      return state;
  }
}
