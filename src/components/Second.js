import React, { Component } from 'react';

class Second extends Component {
  state = {
    name: 'React class component',
  };
  render() {
    const { name } = this.state;
    return <div className="second">Hello from {name}</div>;
  }
}

export default Second;