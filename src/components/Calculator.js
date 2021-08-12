import React from 'react';
import MainContainer from './MainContainer';
import Display from './Display';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  refreshStates = (buttonName) => {
    const { total, next, operation } = calculate(this.state, buttonName);
    if (total || total === null) {
      this.setState({
        total,
      });
    }
    if (next || next === null) {
      this.setState({
        next,
      });
    }
    if (operation || operation === null) {
      this.setState({
        operation,
      });
    }
  };

  handleClick = (e) => {
    this.refreshStates(e.target.dataset.name);
  };

  handleKey = (e) => {
    e.preventDefault();
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container">
        <div className="hero-container">
          <Display input={total} next={next} operation={operation} />
          <MainContainer event={this.handleClick} keyDown={this.handleKey} />
        </div>
      </div>
    );
  }
}

export default Calculator;
