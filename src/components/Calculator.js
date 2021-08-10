import React from 'react';
import Display from './Display';
import ButtonsTable from './ButtonsTable';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
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
