import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import programmers from './reducers/programmers';
import addProgrammerData from './reducers/addProgrammerData';

const reducers = combineReducers({
  programmers,
  addProgrammerData
})

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
