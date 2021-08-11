import React from 'react';
import Button from './Button';

class ButtonsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const signs = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    const rows = [];

    for (let i = 1; i <= signs.length; i += 1) {
      if (i % 4 === 0 || i === 19) {
        rows.push(
          <Button color="orange" data={signs[i - 1]} key={i - 1} />,
        );
      } else if (i === 17) {
        rows.push(
          <Button color="white_0" data={signs[i - 1]} key={i - 1} />,
        );
      } else {
        rows.push(
          <Button data={signs[i - 1]} key={i - 1} />,
        );
      }
    }
    return (
      <div className="container">{rows}</div>
    );
  }
}

export default ButtonsTable;
