import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ input, next, operation }) => (
  <div className="input" id="display">
    {input}
    {' '}
    {operation}
    {' '}
    {next}
    {' '}
  </div>
);

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
