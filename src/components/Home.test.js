import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Test NavBar component', () => {
  //Arrange

  //Act
  const component = render(<Home />);

  //Assert
  test('Testing Quote component render', () => {
    component.getByText('The best Calculator in the Web');
  });
});
