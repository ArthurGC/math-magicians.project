import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Test Button component', () => {
    //Arrange
    const button = {
        color: 'black',
        data: '+',
    }

    //Act
    const component = render(<Button color={button.color} data={button.data} />)
    
    //Assert
    test('Render Button', () => {
        component.getByText('+');
    })
})
