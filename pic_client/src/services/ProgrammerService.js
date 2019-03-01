const ProgrammerService = {
  fetchProgrammers: () => {
    return fetch('/programmers')
      .then(response => response.json())
  }
}

export default ProgrammerService;
