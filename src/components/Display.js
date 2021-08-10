import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
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
