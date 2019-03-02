const API_URL = process.env.REACT_APP_API_URL;

const ProgrammerService = {
  fetchProgrammers() {
    return fetch(`${API_URL}/programmers`)
      .then(response => response.json())
  }
}

export default ProgrammerService;
