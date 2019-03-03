import React, { Component } from 'react';
import Programmers from './Programmers';
import './App.css';
import About from '../components/about';



class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>Partners in Code</h1>
      <About />
      <Programmers />
      </div>
    );
  }
}

export default App;
