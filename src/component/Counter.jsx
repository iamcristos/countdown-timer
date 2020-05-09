import React from 'react'

export default function Counter(props) {
    const { timerTime } = props.counter;
    const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    return (
        <div>
            <div>
                <p> {minutes} : {seconds}  </p>
            </div>
            <button onClick={props.startTimer} style={{background: 'white'}}>Start</button>
            <button onClick={(e)=> props.stopTimer(e, props.interval)} style={{background: 'white'}}>Pause</button>
        </div>
    )
}
