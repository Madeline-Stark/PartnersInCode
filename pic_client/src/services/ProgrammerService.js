const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

const ProgrammerService = {
  fetchProgrammers: () => {
    return fetch('/programmers')
      .then(response => response.json())
  }
}

export default ProgrammerService;
