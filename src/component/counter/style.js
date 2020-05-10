import React from 'react';
import Blink from 'react-blink-text';
import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    justify-content: center;
`;

export const BlinkTimer = ({minutes, seconds}) => (
<Blink
    text={`${minutes} : ${seconds}`}
    color='red'
    fontSize='120px'
    fontWeight='700'
/>)

export const Timer = styled.p`
    font-size: 120px;
    font-weight: 700;
    margin:15px;

    /* @media (min-width: 500px) {
        font-size: 70px
    } */
`;

export const ButtonDiv = styled.div`
    
`;