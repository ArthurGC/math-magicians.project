import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ input, next, operation }) => {
  let error = null;
  if (next === '0' && operation === '÷') {
    error = 'Division by zero is undefined   ';
  } else {
    error = null;
  }
  return (
    <>
      <div className="input" id="display">
        {input}
        {' '}
        {operation}
        {' '}
        {next}
        {' '}
      </div>
      <div className="error">{error}</div>
    </>
  );
};

Display.defaultProps = {
  input: '',
  next: '',
  operation: '',
};

Display.propTypes = {
  input: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
