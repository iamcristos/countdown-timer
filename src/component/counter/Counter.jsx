import React from 'react'
import {BlinkTimer, Section, Timer} from './style';

export default function Counter(props) {
    const { timerTime, timerOn } = props.counter;
    const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    const secondCheck = (sec) => timerOn &&  timerTime <= (sec * 1000);
    const color =  secondCheck(20) ? 'red' : "black"

    let text = <Timer style={{color}}> {minutes} : {seconds}  </Timer>

    if(secondCheck(10)) {
        text = <BlinkTimer minutes={minutes} seconds={seconds} />
    }
    return (
        <Section>
            <div>
                {text}
            </div>
            {!timerOn ? 
                <button onClick={props.startTimer} style={{background: 'white', border: "none"}}>
                    <i class="far fa-play-circle" style={{fontSize: '35px'}}></i>
                </button> :
                <button onClick={()=> props.pauseTimer()} style={{background: 'white', border: "none"}}>
                    <i class="far fa-pause-circle" style={{fontSize: '30px'}}></i>
                </button>
            }
        </Section>
    )
}
