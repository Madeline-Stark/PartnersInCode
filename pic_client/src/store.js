import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import programmers from './reducers/Programmers';
import addProgrammerData from './reducers/addProgrammerData';

const reducers = combineReducers({
  programmers,
  addProgrammerData
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
);
