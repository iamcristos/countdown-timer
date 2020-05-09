import React from 'react'

export default function Input(props) {
    const handleOnSubmit = (e)=>{
        e.preventDefault()
          props.startTimer()
    }
    return (
        <section>
        <form onSubmit={handleOnSubmit}>
          <label>Countdown:</label>
          <input type='text' placeholder='min' onChange={props.handleInput} value={props.time}/>
          <button type='submit'>Start</button>
        </form>
      </section>
    )
}
