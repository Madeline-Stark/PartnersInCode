import React, { Component } from 'react';
import ProgrammerCard from '../components/ProgrammerCard';
import AddProgrammer from './AddProgrammer';
import { connect } from 'react-redux';
import { getProgrammers } from '../actions/programmers';

class Programmers extends Component {

  render() {
    return (
      <div>
        {this.props.programmers.map(programmer => <ProgrammerCard key={programmer.id} programmer={programmer} />)}
        <AddProgrammer addProgrammer={this.addProgrammer}/>
      </div>
    );
    }
  }

  componentDidMount() {
    // this.props.dispatch({
    //   type: 'GET_PROGRAMMER_SUCCESS',
    //   programmers: []
    // })
  }

  const mapStateToProps = (state) => {
    return ({
      programmers: state.programmers
    })
  }




export default connect(mapStateToProps, { getProgrammers })(Programmers);
