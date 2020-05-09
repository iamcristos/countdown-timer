import React from 'react'

export default function Text(props) {
    const {counter, time, stopTimer, interval, text, setText} = props
    const stopTime = +time * 60 * 1000;
    const checkHalf = (stopTime/2 <= counter.timerTime)
    
    if(counter.timerOn && stopTime <= counter.timerTime) {
        stopTimer(interval)
    }
    if(counter.timerOn && checkHalf) {
        setText('More than halfway there!')
    }
    return (
        <div>
            {!counter.completed && text}
            {counter.completed && "Time's up"}
        </div>
    )
}
