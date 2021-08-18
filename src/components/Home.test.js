import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Test Home component', () => {
  //Arrange

  //Act
  const component = render(<Home />);

  //Assert
  test('Testing Home component render', () => {
    component.getByText('The best Calculator in the Web');
  });
});
