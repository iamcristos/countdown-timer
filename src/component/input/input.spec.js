import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Input from './Input';

afterEach(cleanup);

test('should render input label and button', () => {
    const { getByText, getByPlaceholderText } = render(<Input />)
    const button = getByText(/Start/)
    const input = getByPlaceholderText(/min/)
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
})

test('should fire onSubmit event', () => {
    const startTimer= jest.fn()
    const {getByTestId } = render(<Input startTimer={startTimer}/>)
    const form = getByTestId('form')
    fireEvent.submit(form, jest.mock())
    expect(form).toBeInTheDocument()
    expect(startTimer).toHaveBeenCalled()
})

test('should input onChange event to be fired', () => {
    const handleInput= jest.fn()
    let time = 1
    const {getByTestId } = render(<Input handleInput={handleInput} time={time}/>)
    const input = getByTestId('input')
    fireEvent.change(input, {target: {time: 1}})
    expect(input).toBeInTheDocument()
    expect(time).toBe(1)
})
