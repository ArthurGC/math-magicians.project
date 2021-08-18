import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Test Footer component', () => {
  //Arrange

  //Act
  const component = render(<Footer />);
  //Assert
  test('Testing Footer component render', () => {
    component.getByText('ArthurGC');
  });
});
