import React, { Component } from 'react';
import Programmers from './Programmers';
import './App.css';
import About from '../components/about';
import Title from '../components/title';
import Resources from '../components/resources';



class App extends Component {

  render() {
    return (
      <div className="App">
      <Title />
      <About />
      <Programmers />
      <Resources />
      </div>
    );
  }
}

export default App;
