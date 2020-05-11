import React from 'react';
import { render } from '@testing-library/react'

import Counter from './Counter';

test('should render only timer text and pause btn', () => {
    const startTimer = jest.fn()
    const stopTimer = jest.fn()
    const props = {counter:{ timerOn: true, timerTime:3000}, 
    startTimer, stopTimer}
    const { getByTestId } = render(<Counter counter={props.counter} startTimer={props.startTimer} stopTimer={props.stopTimer}/>)
    const playBtn = getByTestId('pause')
    expect(playBtn).toBeInTheDocument()
});

test('should render only timer text and play btn', () => {
    const startTimer = jest.fn()
    const stopTimer = jest.fn()
    const props = {counter:{ timerOn: false, timerTime:3000}, 
    startTimer, stopTimer}
    const { getByTestId } = render(<Counter counter={props.counter} startTimer={props.startTimer} stopTimer={props.stopTimer}/>)
    const playBtn = getByTestId('play')
    expect(playBtn).toBeInTheDocument()
});
