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
    fontSize='80px'
    fontWeight='500'
/>)

export const Timer = styled.p`
    font-size: 80px;
    font-weight: 500;
    margin:15px;
`;
