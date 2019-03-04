import React from 'react'
import App from '../containers/App'
import Programmers from '../containers/programmers.js'
import About from '../components/about'
import Resources from '../components/resources'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default (
  <Router>
  <React.Fragment>
    <Route exact path='/' render={App}/>
    <Route exact path="/about" render={About} />
    <Route exact path="/programmers" render={Programmers} />
    <Route exact path="/resources" render={Resources} />
  </React.Fragment>
  </Router>
)
