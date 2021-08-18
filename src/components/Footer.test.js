import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Test Footer component', () => {
  // Arrange

  // Act
  const component = render(<Footer />);
  // Assert
  test('Testing Footer render', () => {
    component.getByText(/ArthurGC/);
  });
});
