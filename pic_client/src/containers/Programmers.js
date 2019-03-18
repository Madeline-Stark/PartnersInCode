import React, { Component } from 'react';
import AddProgrammer from './AddProgrammer';
import { connect } from 'react-redux';
import { fetchProgrammers } from '../actions/programmers';
import ProgrammerCard from '../components/ProgrammerCard';
import './Programmers.css';
import LikeButton from '../components/LikeButton.js';

class Programmers extends Component {

  componentDidMount() {
    this.props.fetchProgrammers()
  }

  render() {

    return (
      <div className="ProgrammersContainer">
        <h3>Programmers Looking to Pair:</h3>
        <div class="row">
        {this.props.programmers.map(programmer =>
          <div>
           <ProgrammerCard key={programmer.id} programmer={programmer}
           />
           </div>
         )}
        </div>
      </div>
    );
    }
  }

  //mapStateToProps is like a reader, whereas dispatch is writer
  const mapStateToProps = (state) => {
    return ({
      programmers: state.programmers
    })
  }

  //mapdispatchtoprops causes error-already displatching in fetch



//whatever function we pass to theconnect() function will be called each time the state changes, and the first argument to that function, whatever it's name, will be the state of the store.
//ES6 shorthand lets us pass in *one* value that will be read as the key and value
//if pass in object, connect handles dispatch so no need for mapdispatchtoprops
export default connect(mapStateToProps, { fetchProgrammers })(Programmers);
