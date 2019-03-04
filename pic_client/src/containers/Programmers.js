import React, { Component } from 'react';
import AddProgrammer from './AddProgrammer';
import { connect } from 'react-redux';
import { fetchProgrammers } from '../actions/programmers';
import ProgrammerCard from '../components/ProgrammerCard';
import './Programmers.css';

class Programmers extends Component {

  componentDidMount() {
    this.props.fetchProgrammers()
  }

  render() {

    return (
      <div className="ProgrammersContainer">
        <h3>Programmers Looking to Pair:</h3>
        {this.props.programmers.map(programmer =>
           <ProgrammerCard key={programmer.id} programmer={programmer}
           />
         )}
      </div>
    );
    }
  }


  const mapStateToProps = (state) => {
    return ({
      programmers: state.programmers
    })
  }



export default connect(mapStateToProps, { fetchProgrammers })(Programmers);
