import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddProgrammer extends Component {

  handleOnChange = event => {
    const { name, value } = event.target; //returns element that triggered event
    const currentProgrammerFormData = Object.assign({}, this.props.addProgrammerData, {
      [name]: value
    })
    this.props.updateProgrammerFormData(currentProgrammerFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addProgrammer(this.props.addProgrammerData)
  }

  render() {
    const { name, languages, time_zone, email } = this.props.addProgrammerData
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

const mapStateToProps = state => {
  return {
    addProgrammerData: state.addProgrammerData
  }
}

export default connect(mapStateToProps)(AddProgrammer);
