import React from 'react'
import {Section, Form, Label, Input, Button} from './style';
export default function TimeInput(props) {
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        props.startTimer()
    }
    
    return (
        <Section>
          <Form onSubmit={handleOnSubmit} data-testid='form'>
            <Label htmlFor="inputtime">Countdown:</Label>
            <Input 
              type='text' 
              name='inputtime'
              placeholder='min'
              required
              onChange={props.handleInput} 
              value={props.time}
              data-testid='input'
            />
            <Button type='submit'>Start</Button>
          </Form>
      </Section>
    )
}
