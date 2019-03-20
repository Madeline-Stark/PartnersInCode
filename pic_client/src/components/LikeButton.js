import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    // Define the initial state:
    // can use .state here b/c its component constructor,
    // otherwise would use .setState
    this.state = {
      counter: 0,
    };
  }

  handleClick() {
    //b/c pass function as first argument, React calls with current state
    this.setState((prevState) => {
      //need to use prevState b/c asynchronous and can cause errors
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
