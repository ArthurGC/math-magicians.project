import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Quote from './Quote';

describe('Test Quote component', () => {
  // Arrange

  // Act
  const component = render(<Quote />);
  // Assert
  test('Testing Quote render', () => {
    component.getByText('Mathematics is not about numbers, equations, computations, or algorithms: It is about understanding.');
    component.getByText('William Paul Thurston');
  });
});
