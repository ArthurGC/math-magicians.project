import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from './Quote';

describe('Test Quote component', () => {
  //Arrange

  //Act
  const component = render(<Quote />);

  //Assert
  test('Testing Quote component render', () => {
    component.getByText('William Paul Thurston');
  });
});
