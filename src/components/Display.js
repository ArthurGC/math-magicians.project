import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="display">
        <p className="text">0</p>
      </div>
    );
  }
}

export default Display;
