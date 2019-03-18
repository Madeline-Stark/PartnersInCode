import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = {
      counter: 0,
    };
  }

  handleClick() {
    this.setState((prevState, props) => {
      return { counter: prevState.counter + 1}
    });
  }

  render() {
    return (
      <div>
      <button onClick={() => this.handleClick()}>{this.state.counter} likes</button>
      </div>
    )
    //need () => to have access to previous state
  }
}

export default LikeButton;
