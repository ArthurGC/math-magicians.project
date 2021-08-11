import React from 'react';
import Button from './Button';
import Display from './Display';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  render() {
    const { input } = this.state;
    return (
      <div className="container">
        <Display input={input} />
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

export default MainContainer;
