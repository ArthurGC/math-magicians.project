import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './Calculator';

describe('Test Calculator component', () => {
  // Arrange

  // Act
  const component = render(<Calculator />);

  // Assert
  test('Testing Calculator component render', () => {
    component.getByText("Let's do some math!");
  });
});
