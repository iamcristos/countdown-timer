import React from 'react'
import {Section, Button} from './style'

export default function SpeedControl(props) {
    // const [btn, setBtn] = useState({'1x':true, '1.5x': false, '2x': false})
    // const switchFocus = (btn) => {
    //     setBtn((prevState) => ({}))
    // }
    return (
        <Section>
            <Button onClick={(e) => props.startTimer(e, 0)}>1X</Button>
            <Button onClick={(e) => props.startTimer(e, 1500)}>1.5X</Button>
            <Button onClick={(e)=> props.startTimer(e,2000)}>2X</Button>
        </Section>
    )
}
