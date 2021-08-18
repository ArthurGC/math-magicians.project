import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Test Home component', () => {
  // Arrange

  // Act
  const component = render(<Home />);
  // Assert
  test('Testing Home render', () => {
    component.getByText('The best Calculator in the Web');
  });
});
