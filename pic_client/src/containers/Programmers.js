import React, { Component } from 'react';
import ProgrammerCard from '../components/ProgrammerCard';
import AddProgrammer from './AddProgrammer';

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




export default Programmers;
