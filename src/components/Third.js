import React, { PureComponent } from 'react';

class Third extends PureComponent {
  state = {
    name: 'React PureComponent',
  };
  render() {
    const { name } = this.state;
    return <div className="third">Hello from {name}</div>;
  }
}

export default Third;