

import ProgrammerService from '../services/ProgrammerService';



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

//store gives access to dispatch()
//dispatch should call a reducer, reassign the state, and render a change.
export const fetchProgrammers = () => {
  return dispatch => {
    ProgrammerService.fetchProgrammers()
      .then(programmers => {
        //middleware allows us to access data after retrieved
        dispatch(successfullyGetProgrammers(programmers))
        //dispatches above action creator which store passes to reducer
        //that returns programmers we return in action and passes to container
      })
      .catch(error => console.log(error));
  }
}


export const addProgrammer = programmer => {
  return dispatch => {
    ProgrammerService.createProgrammer(programmer)
      .then(programmer => {
        dispatch(successfullyAddProgrammer(programmer));
      })
      .catch(error => console.log(error));
  }
}
