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
    ProgrammerService.fetchProgrammers()
  }

  render() {
    return (
      <Programmers programmers={programmers}/>
    );
  }
}

export default App;
