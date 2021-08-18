import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Calculator from './Calculator';

describe('Test Calculator component', () => {
  // Arrange

  // Act
  const component = render(<Calculator />);
  // Assert
  test('Testing Calculator render', () => {
    component.getByText("Let's do some math!");
    component.getByText('x');
    component.getByText('5');
    component.getByText('9');
    component.getByText('+');
    component.getByText('AC');
    component.getByText('=');
  });
});
