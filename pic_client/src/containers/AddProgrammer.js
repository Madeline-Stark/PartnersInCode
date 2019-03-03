import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { updateProgrammerFormData } from '../actions/programmerForm';
import { addProgrammer } from '../actions/programmers';

class AddProgrammer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      languages: '',
      time_zone: '',
      img_url: '',
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
      img_url: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>

      <h3>Add Yourself to the Registry:</h3>

        <label htmlFor="name">Your Name </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          placeholder="Your Name"
          />
          <br />

          <label htmlFor="languages">Programming Languages </label>
          <input
            type="text"
            name="languages"
            value={this.state.languages}
            onChange={this.handleOnChange}
            placeholder="Programming Languages"
            />
            <br />

            <label htmlFor="time_zone">Your Time Zone </label>
            <input
              type="text"
              name="time_zone"
              value={this.state.time_zone}
              onChange={this.handleOnChange}
              placeholder="Your Time Zone"
              />
              <br />

              <label htmlFor="email">Your Email </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder="Your Email"
                />
                <br />

                <label htmlFor="img_url">Link to a photo of you! </label>
                <input
                  type="text"
                  name="img_url"
                  value={this.state.img_url}
                  onChange={this.handleOnChange}
                  placeholder="Your Photo"
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

export default connect(mapStateToProps, {
  addProgrammer
})(AddProgrammer);

//export default connect(null, { addProgrammer })(AddProgrammer);
