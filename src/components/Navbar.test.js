import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Test Navbar component', () => {
  // Arrange

  // Act
  const component = render(<Router><Navbar /></Router>);
  // Assert
  test('Testing Navbar render', () => {
    component.getByText('Math Magicians');
    component.getByText('Home');
    component.getByText('Calculator');
    component.getByText('Quote');
  });
});
