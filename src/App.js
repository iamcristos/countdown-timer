import React, {useState} from 'react';
import './App.css';
import Input from './component/Input';
import Counter from './component/Counter';
import Text from './component/Text';

function App() {
  const [time, setTime] = useState('')
  const [interval, setInterva] = useState(null)

  const state = {
    timerOn: false,
    timerTime: time * 60 * 1000,
    timerStart: 0,
    completed: false
  }
  const [counter, setCounter] = useState(state)


  const startTimer = (e, num) => {
    if(+time * 60*1000 <= counter.timerTime) {
        return
    }
     setCounter(prevCount => ({...prevCount, timerOn: true, timerTime: prevCount.timerTime, timerStart: Date.now() - prevCount.timerTime}));
     setInterva(setInterval(()=> setCounter(prevState => ({...prevState, timerTime:  (Date.now() - prevState.timerStart)})), 1000))
  }

  const pauseTimer = () => {
    clearInterval(interval)
    setCounter(prevState => ({...prevState, timerOn: false}))
  }

  const stopTimer = () => {
    clearInterval(interval)
    setCounter(prevState => ({...prevState, timerOn: false, completed: true}))
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
      />
      <Text 
        time = {time}
        counter = {counter}
        stopTimer={stopTimer}
        interval={interval}
      />
      <Counter 
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        counter={counter}
        time={time}
      />
    </div>
  );
}

export default App;
