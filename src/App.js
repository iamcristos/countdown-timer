import React, {useState} from 'react';
import './App.css';
import Input from './component/input/Input';
import Counter from './component/counter/Counter';
import Text from './component/timeText/Text';
import SpeedContol from './component/timeSpeed/SpeedControl';
function App() {
  const [time, setTime] = useState('')
  const [interval, setInterva] = useState(null)

  const state = {
    timerOn: false,
    timerTime: 0,
    timerStart: 0,
    completed: false
  }
  const [counter, setCounter] = useState(state)

  const startTimer = () => {
    if(counter.timerOn) return
    setCounter(prevCount => ({...prevCount, timerOn: true, timerTime: time * 60 * 1000, timerStart: time * 60 * 1000 + Date.now(), completed: false}));
    setInterva(setInterval(()=> setCounter(prevState => ({...prevState, timerTime:  (prevState.timerStart - Date.now())})), 1000))
  }
  const resumeTimer = (e, num=1000) => {
    if(+time * 60*1000 <= counter.timerTime) {
        return
    }
    if(!counter.timerTime) return
     clearInterval(interval)
     setCounter(prevCount => ({...prevCount, timerOn: true, timerStart: prevCount.timerTime + Date.now()}));
     setInterva(setInterval(()=> setCounter(prevState => ({...prevState, 
      timerTime: (prevState.timerTime - (1000))})), num))
  }

  const pauseTimer = () => {
    clearInterval(interval)
    setCounter(prevState => ({...prevState, timerOn: false}))
  }

  const stopTimer = () => {
    clearInterval(interval)
    setCounter(prevState => ({...prevState, timerOn: false, completed: true, timerStart: 0, timerTime:0}))
  }

  const handleInput = (e) =>{
    setTime(e.target.value)
  }
  return (
    <div className="App">
      <Input 
        startTimer={startTimer}
        time={time}
        handleInput={handleInput}
        timerOn={counter.timerOn}
      />
      <Text 
        time = {time}
        counter = {counter}
        stopTimer={stopTimer}
        interval={interval}
      />
      <Counter 
        startTimer={resumeTimer}
        pauseTimer={pauseTimer}
        counter={counter}
        time={time}
      />
      <SpeedContol
        startTimer={resumeTimer}
        timerOn={counter.timerOn}
      />
    </div>
  );
}

export default App;
