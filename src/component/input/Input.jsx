import React from 'react'
import {Section, Form, Label, Input, Button} from './input';
export default function TimeInput(props) {
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        props.startTimer()
    }
    
    return (
        <Section>
          <Form onSubmit={handleOnSubmit}>
            <Label>Countdown:</Label>
            <Input 
              type='text' 
              placeholder='min'
              required
              onChange={props.handleInput} 
              value={props.time}
            />
            <Button type='submit'>Start</Button>
          </Form>
      </Section>
    )
}
