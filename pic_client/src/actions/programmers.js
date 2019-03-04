

import ProgrammerService from '../services/ProgrammerService';
import {
  makeFetchRequest,
  finishFetchRequest,
  unsuccessfulFetchRequest
} from './asyncThunkActions';


//Action creators-functions that go to reducer
const successfullyGetProgrammers = programmers => {
  return {
    type: 'GET_PROGRAMMER_SUCCESS',
    programmers
  }
}

const successfullyAddProgrammer = programmer => {
  return {
    type: 'CREATE_PROGRAMMER_SUCCESS',
    programmer
  }
}

export const fetchProgrammers = () => {
  return dispatch => {
    dispatch(makeFetchRequest())
    ProgrammerService.fetchProgrammers()
      .then(programmers => {
        dispatch(finishFetchRequest())
        dispatch(successfullyGetProgrammers(programmers))
      })
      .catch(error => {
        dispatch(unsuccessfulFetchRequest())
      });
  }
}

export const addProgrammer = programmer => {
  return dispatch => {
    dispatch(makeFetchRequest());
    ProgrammerService.createProgrammer(programmer)
      .then(programmer => {
        dispatch(finishFetchRequest());
        dispatch(successfullyAddProgrammer(programmer));
      })
      .catch(error => console.log(error));
  }
}
