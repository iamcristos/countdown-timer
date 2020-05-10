import styled from 'styled-components';

export const Section = styled.section`
  display:flex;
  justify-content: center
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 320px;
`
  export const Label= styled.label`
    font-size: 14px;
    color: darkgray;
  `;

  export const Input= styled.input`
    margin:10px 0;
    padding:10px 15px;
    width:35%;
    outline:none;
    border:1px solid #bbb;
    border-radius:20px;
    display:inline-block;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    -webkit-transition:0.2s ease all;
    -moz-transition:0.2s ease all;
    -ms-transition:0.2s ease all;
    -o-transition:0.2s ease all;
    transition:0.2s ease all;

    &:focus {
      border-color:cornflowerblue;
    }
  `;

export const Button= styled.button`
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