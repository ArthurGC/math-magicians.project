import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import MainContainer from './MainContainer';

describe('Test MainContainer component', () => {
  // Arrange
  const mockEvent = jest.fn();

  // Act
  const component = render(<MainContainer event={mockEvent} />);
  const button = component.getAllByRole('button')[0];
  // Assert
  test('Testing event functionality call', () => {
    fireEvent.click(button);
    expect(mockEvent).toHaveBeenCalledTimes(1);
  });
});
