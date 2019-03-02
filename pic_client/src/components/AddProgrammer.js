import React, { Component } from 'react';
//use class b/c form
class AddProgrammer extends Compnent {
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

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>

        <label htmlFor="programmer_name">Name</label>
        <input
          type="text"
          name="title"
          value={this.state.name}
          onChange={this.handleOnChange}
          placeholder="Programmer Name"
          />

          <label htmlFor="programmer_languages">Languages</label>
          <input
            type="text"
            name="languages"
            value={this.state.languages}
            onChange={this.handleOnChange}
            placeholder="Programmer Languages"
            />

            <label htmlFor="programmer_time_zone">Time Zone</label>
            <input
              type="text"
              name="title"
              value={this.state.time_zone}
              onChange={this.handleOnChange}
              placeholder="Programmer Time Zone"
              />

              <label htmlFor="programmer_email">Email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder="Programmer Email"
                />

                <button>Add Yourself to the Registry</button>
      </form>
    )
  }
}

export default AddProgrammer;
