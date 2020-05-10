import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('should render input label and button', () => {
    const { getByText, getByPlaceholderText } = render(<Input />)
    const button = getByText(/Start/)
    const input = getByPlaceholderText(/min/)
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
})

test('should fire onSubmit event', () => {
    const props = {startTimer: ()=> jest.fn()}
    const {getByTestId } = render(<Input startTimer={props.startTimer}/>)
    const form = getByTestId('form')
    const event = fireEvent.submit(form, {})
    expect(form).toBeInTheDocument()
    expect(event).toHaveBeenCalled()
})
