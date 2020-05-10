import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    justify-content: center;
    /* width: 30%; */
`

export const Button = styled.button`
    margin: 5px 10px;
    padding:10px 20px;
    width:auto;
    background:#1abc9c;
    border:none;
    display:inline-block;
    color:white;
    outline: none;
    cursor:pointer;
    border-radius:20px;
    -webkit-transition:0.2s ease all;
    -moz-transition:0.2s ease all;
    -ms-transition:0.2s ease all;
    -o-transition:0.2s ease all;
    transition:0.2s ease all;
    &:hover {
        opacity:0.8;
    }
    &:focus {
        opacity:0.8;
    }
`;