import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { input, next, operation } = this.props;
    let number = '0';
    if (operation && next === null) {
      number = operation;
    } else {
      if (input) {
        number = input;
      }
      if (next) {
        number = next;
      }
    }
    return <div className="input" id="display">{number}</div>;
  }
}
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
