import React, { Component } from 'react';
import Programmers from './components/Programmers';
import ProgrammerService from './services/ProgrammerService';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      programmers: []
    }
  }

  componentDidMount() {
    ProgrammerService.fetchProgrammers().then(programmers => this.setState({ programmers }

    ))
  }

  addProgrammer = programmer => {
    ProgrammerService.createProgrammer(programmer).then(programmer => this.setState({
      programmers: this.state.programmers.concat(programmer)
    }))
  }

  render() {
    return (
      <Programmers programmers={this.state.programmers}/>
      <AddProgrammer addMovie={this.addMovie}/>
    );
  }
}

export default App;
