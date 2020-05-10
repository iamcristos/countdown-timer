import React from 'react'
import audio from '../../assests/sound.mp3';

export default function Text(props) {
    const sound = new Audio(audio)
    const {counter, time ,stopTimer, interval} = props
    const stopTime = 0
    const checkHalf = ((time * 60 * 1000)/2 >= counter.timerTime)
   
    let text
    if(counter.timerOn && stopTime >= counter.timerTime) {
        sound.play()
        stopTimer(interval)
    }
    if(counter.timerOn && checkHalf) {
        text = ('More than halfway there!')
    }
    return (
        <div style={{margin: '5px', height: '15px'}}>
            {!counter.completed && text}
            {counter.completed && "Time's up"}
        </div>
    )
}
