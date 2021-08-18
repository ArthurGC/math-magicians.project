import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Test Button component', () => {
  // Arrange
  const props = {
    color: 'white',
    data: 'It is a Test',
  };
  // Act
  const component = render(<Button data={props.data} color={props.color} />);

  // Assert
  test('Testing Button component render', () => {
    component.getByText('It is a Test');
  });
});
