import React, { Component } from 'react';
import AddProgrammer from './AddProgrammer';
import { connect } from 'react-redux';
import { fetchProgrammers, deleteProgrammer } from '../actions/programmers';

class Programmers extends Component {

  componentDidMount() {
    this.props.fetchProgrammers()
  }

  render() {

    const renderProgrammers = this.props.programmers.map(programmer =>
      <p key={programmer.id}>
        {programmer.name}
        {programmer.languages}
        {programmer.time_zone}
        {programmer.email}
        <span onClick={() => this.props.deleteProgrammer(programmer.id)}>Delete</span>
      </p>
      )

      console.log(this)

    return (
      <div>
        <h3>Programmers Looking to Pair:</h3>
        {renderProgrammers}
        <AddProgrammer />
      </div>
    );
    }
  }

  export default connect(
  state => ({
    programmers: state.programmers,
  }),
  { fetchProgrammers, deleteProgrammer }
)(Programmers);


//   const mapStateToProps = (state) => {
//     return ({
//       programmers: state.programmers
//     })
//   }
//
//
//
// export default connect(mapStateToProps, { getProgrammers })(Programmers);
