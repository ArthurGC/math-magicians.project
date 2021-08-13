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
    <div className="input" id="display">
      {error}
      {'     '}
      {input}
      {' '}
      {operation}
      {' '}
      {next}
      {' '}
    </div>
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
