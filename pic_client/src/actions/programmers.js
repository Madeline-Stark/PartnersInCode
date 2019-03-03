

import { resetProgrammerForm } from './programmerForm';

const API_URL = process.env.REACT_APP_API_URL;

//Action creators-functions that go to reducer
const setPogrammers = programmers => {
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

// Async actions

export const getProgrammers = () => {
  return dispatch => {
    return fetch(`${API_URL}/programmers`)
      .then(response => response.json())
      .then(programmers => dispatch(setPogrammers(programmers)))
      .catch(error => console.log(error));
  }
}

export const createProgrammer = programmer => {
  return dispatch => {
    return fetch(`${API_URL}/programmers`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ programmer: programmer })
    })
      .then(response => response.json())
      .then(programmer => {
        dispatch(addProgrammer(programmer))
        dispatch(resetProgrammerForm())
      })
  }
}
