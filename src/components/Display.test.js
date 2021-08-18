import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Display from './Display';

describe('Test Display component', () => {
  // Arrange
  const props = {
    total: '25',
    next: '0',
    operation: '÷',
  };

  // Act
  const component = render(<Display
    input={props.total}
    next={props.next}
    operation={props.operation}
  />);
  // Assert
  test('Testing Display render and receive a division by 0', () => {
    component.getByText('25 ÷ 0');
    component.getByText('Division by zero is undefined');
  });
});
