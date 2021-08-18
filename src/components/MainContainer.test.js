import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainContainer from './MainContainer';


describe('Test MainContainer component', () => {
    //Arrange
    const mockHandleClick = jest.fn();
    //Act
    const component = render(<MainContainer event={mockHandleClick} />);
    const divButton = component.getAllByRole('button')[0];
    //Assert
    test('Testing MainContainer component render and call an event click',() => {
        fireEvent.click(divButton);
        component.getByText('AC');
        component.getByText('7');
        component.getByText('%');
        component.getByText('-');
        component.getByText('.');
        expect(mockHandleClick.mock.calls.length).toBe(1); 
    })
})
