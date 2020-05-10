import React from 'react'
import {Section, Button} from './style'

export default function SpeedControl(props) {
    return (
        <Section>
            <Button>1X</Button>
            <Button onClick={(e) => props.startTimer(e, 1500)}>1.5X</Button>
            <Button onClick={(e)=> props.startTimer(e,2000)}>2X</Button>
        </Section>
    )
}
