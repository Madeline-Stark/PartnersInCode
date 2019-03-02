import React, { Component } from 'react';
//use class b/c form
class AddProgrammer extends Component {
  constructor(props) { //need to pass down props
    super(props)

    this.state = {
      name: '',
      languages: '',
      time_zone: '',
      email: ''
    }
  }

  handleOnChange = event => { //tracks how state is changing-even before submit
    const { name, value } = event.target;
    this.setState({
      [name]: value //name of property equal to value of property
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const programmer = this.state;
    this.props.addProgrammer(programmer)
    this.setState({ //reset state
      name: '',
      languages: '',
      time_zone: '',
      email: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>

        <input
          type="text"
          name="title"
          value={this.state.name}
          onChange={this.handleOnChange}
          placeholder="Your Name"
          />


          <input
            type="text"
            name="languages"
            value={this.state.languages}
            onChange={this.handleOnChange}
            placeholder="Programming Languages"
            />

            <input
              type="text"
              name="title"
              value={this.state.time_zone}
              onChange={this.handleOnChange}
              placeholder="Your Time Zone"
              />

              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder="Your Email"
                />

                <button>Add Yourself to the Registry</button>
      </form>
    )
  }
}

export default AddProgrammer;
