import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('Test NavBar component', () => {
  //Arrange

  //Act
  const component = render(
    <Router>
      <Navbar />
    </Router>
  );

  //Assert
  test('Testing navBar component render', () => {
    component.getByText('Home');
    component.getByText('Calculator');
    component.getByText('Quote');
    component.getByText('Math Magicians');
  });
});
