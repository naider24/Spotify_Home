import styled from "styled-components";

export const InputSearch = styled.input`
appearance: none;

position: relative;
border-radius:30px 0px 0px 30px;
font-family: 'Wix Madefor Display', sans-serif;;
height: 50px;
background-color: #1A1A1A;
width: 100%;
padding: 10px;
padding-left:50px;
outline: 0;
text-decoration:none;
border: none;
color: white;
&:hover{
    border: 1px solid white;
}

 

&::placeholder{
    font-weight: bold;
    color: gray;

}

&::-webkit-search-cancel-button {

/* Remove default */
-webkit-appearance: none;
  

}

`

export const BollBorderWhite = styled.div `
display: flex;
justify-content: center;
align-items: center;
background-color: #1A1A1A;
height: 30px;
width: 50px;
padding: 10px;
border-radius:0px 30px 30px 0px;

`
export const Boll = styled.div`

background-color: #1A1A1A;
height: 20px;
width: 20px;
border-radius: 50%;
border: 2px solid white;

`