import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { event, keyDown } = this.props;
    return (
      <div role="button" className="container" onClick={event} onKeyDown={keyDown} tabIndex={0}>
        <div className="row">
          <Button data="AC" />
          <Button data="+/-" />
          <Button data="%" />
          <Button color="orange" data="÷" />
        </div>
        <div className="row">
          <Button data="7" />
          <Button data="8" />
          <Button data="9" />
          <Button color="orange" data="x" />
        </div>
        <div className="row">
          <Button data="4" />
          <Button data="5" />
          <Button data="6" />
          <Button color="orange" data="-" />
        </div>
        <div className="row">
          <Button data="1" />
          <Button data="2" />
          <Button data="3" />
          <Button color="orange" data="+" />
        </div>
        <div className="row">
          <Button color="white_0" data="0" />
          <Button data="." />
          <Button color="orange" data="=" />
        </div>
      </div>
    );
  }
}

MainContainer.propTypes = {
  event: PropTypes.func,
  keyDown: PropTypes.func,
};

MainContainer.defaultProps = {
  event: () => -1,
  keyDown: () => -1,
};

export default MainContainer;
