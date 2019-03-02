import React, { Component } from 'react';

class AddProgrammer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      languages: '',
      time_zone: '',
      email: ''
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const programmer = this.state;
    this.props.addProgrammer(programmer)
    this.setState({ 
      name: '',
      languages: '',
      time_zone: '',
      email: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>

      <h3>Add Yourself to the Registry:</h3>

        <label for="name">Your Name </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          placeholder="Your Name"
          />
          <br />

          <label for="languages">Programming Languages </label>
          <input
            type="text"
            name="languages"
            value={this.state.languages}
            onChange={this.handleOnChange}
            placeholder="Programming Languages"
            />
            <br />

            <label for="time_zone">Your Time Zone </label>
            <input
              type="text"
              name="time_zone"
              value={this.state.time_zone}
              onChange={this.handleOnChange}
              placeholder="Your Time Zone"
              />
              <br />

              <label for="email">Your Email </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder="Your Email"
                />
                <br />

                <input type="submit" />
      </form>
    )
  }
}

export default AddProgrammer;
