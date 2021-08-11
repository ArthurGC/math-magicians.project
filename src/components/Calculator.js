import React from 'react';
import Display from './Display';
import ButtonsTable from './ButtonsTable';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Display />
        <ButtonsTable />
      </div>
    );
  }
}

export default Calculator;
