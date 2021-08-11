import React from 'react';
import MainContainer from './MainContainer';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <MainContainer />
      </div>
    );
  }
}

export default Calculator;
