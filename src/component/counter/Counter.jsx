import React from 'react'
import Blink from 'react-blink-text';

export default function Counter(props) {
    const { timerTime, timerOn } = props.counter;
    const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    const secondCheck = (sec) => +props.time && (+props.time*60 *1000) - timerTime <= (sec * 1000);
    const color =  secondCheck(20) ? 'red' : "black"

    let text = <p style={{color}}> {minutes} : {seconds}  </p>

    if(secondCheck(10)) {
        text = <Blink
            text={`${minutes} : ${seconds}`}
            color='red'
            fontSize='16'
        />
    }
    return (
        <div>
            <div>
                {text}
            </div>
            {!timerOn ? 
                <button onClick={props.startTimer} style={{background: 'white'}}>
                    <i class="far fa-play-circle"></i>
                </button> :
                <button onClick={()=> props.pauseTimer()}>
                    <i class="far fa-pause-circle"></i>
                </button>
            }
        </div>
    )
}
