import React from 'react'
import {Section, Button} from './style'

export default function SpeedControl(props) {
    return (
        <Section data>
            <Button 
                disabled={!props.timerOn}
                onClick={(e) => props.startTimer(e, 1000)}
                >1X
            </Button>
            <Button 
                disabled={!props.timerOn}
                onClick={(e) => props.startTimer(e, 667)}
                >1.5X
            </Button>
            <Button 
                disabled={!props.timerOn}
                onClick={(e)=> props.startTimer(e,500)}
                >2X
            </Button>
        </Section>
    )
}
