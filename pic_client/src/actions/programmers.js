

import ProgrammerService from '../services/ProgrammerService';

import { resetProgrammerForm } from './programmerForm';

// const API_URL = process.env.REACT_APP_API_URL;

//Action creators-functions that go to reducer
const getProgrammers = programmers => {
  return {
    type: 'GET_PROGRAMMER_SUCCESS',
    programmers
  }
}

const addProgrammer = programmer => {
  return {
    type: 'CREATE_PROGRAMMER_SUCCESS',
    programmer
  }
}

const deleteProgrammer = programmerId => {
  return {
    type: "SUCCESSFUL_PROGRAMMER_DELETION",
    programmerId
  }
}

// Async actions

export const fetchProgrammers = () => {
  return dispatch => {
    ProgrammerService.fetchProgrammers()
      .then(programmers => {
        dispatch(getProgrammers(programmers))
      })
      .catch(error => console.log(error));
  }
}

export const addProgrammer = programmer => {
  return dispatch => {
    ProgrammerService.createProgrammer(programmer)
      .then(programmer => {
        dispatch(addProgrammers(programmer));
      })
      .catch(error => console.log(error));
  }
}

export const deleteProgrammer = programmerId => {
  return dispatch => {
    ProgrammerService.deleteProgrammer(programmerId)
      .then(response => {
          dispatch(deleteProgrammer(programmerId));
      })
      .catch(error => console.log(error));
  }
}


// export const getProgrammers = () => {
//   return dispatch => {
//     return fetch(`${API_URL}/programmers`)
//       .then(response => response.json())
//       .then(programmers => dispatch(setPogrammers(programmers)))
//       .catch(error => console.log(error));
//   }
// }
//
// export const createProgrammer = programmer => {
//   return dispatch => {
//     return fetch(`${API_URL}/programmers`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ programmer: programmer })
//     })
//       .then(response => response.json())
//       .then(programmer => {
//         dispatch(addProgrammer(programmer))
//         dispatch(resetProgrammerForm())
//       })
//       .catch(error => console.log(error))
//   }
// }
