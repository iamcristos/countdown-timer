import React from 'react';
import { render } from '@testing-library/react';

import Text from './Text';

test('should return More than halfway there', () => {
    const props = {counter: {completed: false, timerTime: Date.now() + (30 *1000), timerOn:true}, time:1, stopTimer: ()=>jest.fn()}
    const { getByText } = render(<Text 
        counter={props.counter}
        time={props.time}
        stopTimer={props.stopTimer}
         />)
    const text = getByText(/More than/i)
    expect(text).toBeInTheDocument();
})

test('should return time is up', () => {
    const props = {counter: {completed: true, timerTime: Date.now() + (60 *1000), timerOn:true}, time:1, stopTimer: ()=>jest.fn()}
    const { getByText } = render(<Text 
        counter={props.counter}
        time={props.time}
        stopTimer={props.stopTimer}
         />)
    const text = getByText(/Time's up/i)
    expect(text).toBeInTheDocument();
})
