import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProgrammerFormData } from '../actions/programmerForm';
import { addProgrammer } from '../actions/programmers';

class AddProgrammer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      languages: '',
      time_zone: '',
    }
  }

  // handleOnChange = event => {
  //   const { name, value } = event.target; //returns element that triggered event
  //   const currentProgrammerFormData = Object.assign({}, this.props.addProgrammerData, {
  //     [name]: value
  //   })
  //   this.props.updateProgrammerFormData(currentProgrammerFormData)
  // }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   this.props.addProgrammer(this.props.addProgrammerData)
  // }

  handleOnSubmit = event => {
    event.preventDefault();
    const programmer = this.state;
    this.props.addProgrammer(programmer)
    this.setState({
      name: '',
      email: '',
      languages: '',
      time_zone: '',
    })
  }

  render() {
    const { name, languages, time_zone, email } = this.props.addProgrammerData;
    return (
      <form onSubmit={this.handleOnSubmit}>

      <h3>Add Yourself to the Registry:</h3>

        <label htmlFor="name">Your Name </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleOnChange}
          placeholder="Your Name"
          />
          <br />

          <label htmlFor="languages">Programming Languages </label>
          <input
            type="text"
            name="languages"
            value={languages}
            onChange={this.handleOnChange}
            placeholder="Programming Languages"
            />
            <br />

            <label htmlFor="time_zone">Your Time Zone </label>
            <input
              type="text"
              name="time_zone"
              value={time_zone}
              onChange={this.handleOnChange}
              placeholder="Your Time Zone"
              />
              <br />

              <label htmlFor="email">Your Email </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.handleOnChange}
                placeholder="Your Email"
                />
                <br />

                <input type="submit" />
      </form>
    )
  }
}
//need map state to props?
const mapStateToProps = state => {
  return {
    addProgrammerData: state.addProgrammerData
  }
}

export default connect(mapStateToProps, {
  updateProgrammerFormData,
  addProgrammer
})(AddProgrammer);
