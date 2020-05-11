import React from 'react'
import {Section, Button} from './style'

export default function SpeedControl(props) {
    return (
        <Section>
            <Button onClick={(e) => props.startTimer(e, 0)}>1X</Button>
            <Button onClick={(e) => props.startTimer(e, 667)}>1.5X</Button>
            <Button onClick={(e)=> props.startTimer(e,500)}>2X</Button>
        </Section>
    )
}
