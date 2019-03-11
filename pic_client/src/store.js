import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'; //import from redux
import thunk from 'redux-thunk';

import programmers from './reducers/Programmers';
import addProgrammerData from './reducers/addProgrammerData';

const reducers = combineReducers({
  programmers,
  addProgrammerData
});

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);

//not letting me pass in several store enhancers
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore( //passing these in with createStore which we imported from redux
  reducers,
  middlewareEnhancer,
);
//store is generic across all apps so can be imported
//store encapsulates our state and provides a controlled way to write (dispatch) and retrieve (getState) information
