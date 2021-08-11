import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { input } = this.props;
    return (
      <div className="input">{input}</div>
    );
  }
}
Display.defaultProps = {
  input: '0',
};

Display.propTypes = {
  input: PropTypes.string,
};

export default Display;
