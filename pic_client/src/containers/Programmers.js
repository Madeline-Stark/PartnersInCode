import React, { Component } from 'react';
import AddProgrammer from './AddProgrammer';
import { connect } from 'react-redux';
import { getProgrammers } from '../actions/programmers';

class Programmers extends Component {

  componentDidMount() {
    this.props.getProgrammers()
  }

  render() {
    console.log(this.props.getProgrammers())

    const renderProgrammers = this.props.programmers.map(programmer =>
      <div key={programmer.id}>
        <p>{programmer.name}</p>
        <p>Languages: {programmer.languages}</p>
        <p>Time Zone: {programmer.time_zone}</p>
        <p>Email: {programmer.email}</p>
      </div>
      )

    return (
      <div>
        <h3>Programmers Looking to Pair:</h3>
        {renderProgrammers}
        <AddProgrammer />
      </div>
    );
    }
  }


  const mapStateToProps = (state) => {
    return ({
      programmers: state.programmers
    })
  }






export default connect(mapStateToProps, { getProgrammers })(Programmers);
