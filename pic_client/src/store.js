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

const reducers = combineReducers({
  programmers: programmerReducer
})

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
