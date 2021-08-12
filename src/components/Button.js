import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { color, data } = this.props;
    return (
      <button type="button" className={color} data-name={data}>{data}</button>
    );
  }
}

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
