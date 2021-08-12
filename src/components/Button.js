import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, data }) => (
  <button type="button" className={color} data-name={data}>{data}</button>
);

Button.defaultProps = {
  color: 'white',
  data: '0',
};

Button.propTypes = {
  color: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Button;
