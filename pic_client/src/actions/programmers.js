const API_URL = process.env.REACT_APP_API_URL;

//Action creators-functions that go to reducer
const setPogrammers = programmers => {
  return {
    type: GET_PROGRAMMER_SUCCESS',
    programmers
  }
}
// Async actions

const getProgrammers = () => {
  dispatch => {
    return fetch(`${API_URL}/programmers`)
      .then(response => response.json())
      .then(programmers => dispatch(setPogrammers))
      .catch(error => console.log(error));
  }
}

// const ProgrammerService = {
//   fetchProgrammers() {
//     // return fetch(`${API_URL}/programmers`)
//     //   .then(response => response.json())
//   },
//
//   createProgrammer(programmer) {
//     const request = {
//       method: 'POST',
//       body: JSON.stringify({
//         programmer: programmer
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     }
//
//     return fetch(`${API_URL}/programmers`, request)
//       .then(response => response.json())
//   }
// }
//
// export default ProgrammerService;
