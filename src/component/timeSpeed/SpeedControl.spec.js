import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import SpeedControl from './SpeedControl';

test('should trigger when each btn are clicked startTimer', () => {
    const startTimer = jest.fn()
    const { getByText } = render(<SpeedControl startTimer={startTimer} timerOn={true}/>)
    const btn = getByText(/1X/)
    fireEvent.click(btn, btn)
    expect(startTimer).toHaveBeenCalled()
})
