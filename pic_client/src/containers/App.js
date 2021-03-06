import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Programmers from './Programmers';
import './App.css';
import About from '../components/about';
import Title from '../components/title';
import Resources from '../components/resources';
import Footer from '../components/footer';
import NavBar from '../components/NavBar';
import AddProgrammer from './AddProgrammer';



class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Title />
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/programmers" component={Programmers} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/addprogrammer" component={AddProgrammer} />
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
