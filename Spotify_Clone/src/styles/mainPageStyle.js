import styled from 'styled-components';


export const Page = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
background-color:#000000;
overflow-x:auto;


`
export const Navbar = styled.nav`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
`

export const DivTitle = styled.div`
display: flex;
flex:1;
width: 95%;
margin-left: 20px;
padding-left: 10px;
height:8%;

align-items: center;

overflow-x: auto;
color: #1ED764;
font-family: 'Wix Madefor Display', sans-serif;
font-size: 25px;


@media only screen and (max-width: 768px) {
    padding-left: 0px;
    margin-left: 10px;
    align-self: none;
    justify-content: center;
}
;
`
export const DivMusics = styled.div`
flex: 24;
display: flex;
width: 100%;
height: 100%;
position: relative;
flex-direction: column;



`


