import React, {useState} from 'react';
import './App.css';
import Input from './component/Input';
import Counter from './component/Counter';
import Text from './component/Text';

function App() {
  const state = {
    timerOn: false,
    timerTime: 0,
    timerStart: 0,
    completed: false
  }
  const [counter, setCounter] = useState(state)
  const [interval, setInterva] = useState(null)
  const [time, setTime] = useState('')
  const [text, setText] = useState('')
  const startTimer = (e, num) => {
     setCounter(prevCount => ({...prevCount, timerOn: true, timerTime: prevCount.timerTime, timerStart: Date.now() - prevCount.timerTime}));

     setInterva(setInterval(()=> setCounter(prevState => ({...prevState, timerTime:  (Date.now() - prevState.timerStart)})), 1000))
  }

  const stopTimer = (interval) => {
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
        text={text}
        setText={setText}
      />
      <Counter 
        startTimer={startTimer}
        interval={interval}
        stopTimer={stopTimer}
        counter={counter}
      />
    </div>
  );
}

export default App;
