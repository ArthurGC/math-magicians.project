import React, { useState } from 'react';
import MainContainer from './MainContainer';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [status, setStatus] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const target = e.target.dataset.name;
    const newState = calculate(status, target);
    setStatus((prevState) => ({ ...prevState, ...newState }));
  };

  const handleKey = (e) => {
    e.preventDefault();
  };

  return (
    <div className="calculator__container">
      <h2 className="calculator__title">Let&apos;s do some math!</h2>
      <div className="hero-container">
        <Display input={status.total} next={status.next} operation={status.operation} />
        <MainContainer event={handleClick} keyDown={handleKey} />
      </div>
    </div>
  );
};

export default Calculator;
