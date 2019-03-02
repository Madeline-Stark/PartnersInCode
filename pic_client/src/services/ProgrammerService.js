const API_URL = process.env.REACT_APP_API_URL;

const ProgrammerService = {
  fetchProgrammers() {
    return fetch(`${API_URL}/programmers`)
      .then(response => response.json())
  },

  createProgrammer(programmer) {
    const request = {
      method: 'POST',
      body: JSON.stringify(programmer),
      contentType: 'application/json',
      accepts: 'application/json'
    }

    return fetch(`${API_URL}/programmers`, request)
      .then(response => response.json())
  }
}

export default ProgrammerService;
