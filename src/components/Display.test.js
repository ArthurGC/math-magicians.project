import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

describe('Test Display component', () => {
  //Arrange
  const props = {
    input: '5',
    next: '4',
    operation: 'x',
  };
  //Act
  const component = render(
    <Display
      input={props.input}
      next={props.next}
      operation={props.operation}
    />
  );

  //Assert
  test('Testing Display component render', () => {
    component.getByText('5 x 4');
  });
});
