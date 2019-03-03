import React, { Component } from 'react';
import Programmers from './Programmers';
import AddProgrammer from './AddProgrammer'
//import ProgrammerService from '../services/ProgrammerService';
import './App.css';



class App extends Component {


  // componentDidMount() {
  //   // ProgrammerService.fetchProgrammers().then(programmers => this.setState({ programmers }
  //   this.props.getProgrammers
  //
  //   ))
  // }

  addProgrammer = programmer => {
    ProgrammerService.createProgrammer(programmer).then(programmer => this.setState({
      programmers: this.state.programmers.concat(programmer)
    }))
  }

  render() {
    return (
      <div className="App">
      <h1>Partners in Code</h1>
      <p>Find your pair programming match!</p>
      <Programmers />
      </div>
    );
  }
}

export default App;
