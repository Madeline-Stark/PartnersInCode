import React, { Component } from 'react';
import Programmers from './Programmers';
import './App.css';



class App extends Component {

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
