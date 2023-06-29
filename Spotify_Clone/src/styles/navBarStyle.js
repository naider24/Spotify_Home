import styled from 'styled-components'
import {RiHomeLine ,RiPlayListFill} from'react-icons/ri'
import {SlSocialSpotify} from 'react-icons/sl'
import {MdLibraryMusic} from 'react-icons/md'
import spotifyIcon from '../imagens/spotify.png'
export const DivOptionsNav = styled.div`
display: flex;
flex-direction: column;
flex:1;
padding: 30px;





@media only screen and (max-width: 768px) {
  
 display: none;

}

`
export const IconBiblioteca = styled(MdLibraryMusic)`
display: flex;
font-size: ${(props)=>(props.checked? '1.7em' : '1.5em')};
color: ${(props)=>(props.checked? 'black' : 'gray')};
width: 100%;
cursor: pointer;
transition: 0.6s;
z-index: 2;
&:hover{
    color: white;
    font-size:1.7em;
}
`
export const SpotifyIcon = styled.div`
display: flex;
width: 100px;
height: 50px;
justify-content: start;
align-items: start;
background-image: url(${spotifyIcon});
background-position: center;
background-repeat: no-repeat;
padding-block-end:20px;

`

export const IconHome = styled(RiHomeLine)`
display: flex;
font-size: ${(props)=>(props.checked? '1.7em' : '1.5em')};
color: ${(props)=>(props.checked? 'black' : 'gray')};
width: 100%;
cursor: pointer;
transition: 0.6s;
z-index: 2;

&:hover{
    color: white;
    font-size:1.7em;
}

`
export const IconPlayList = styled(RiPlayListFill)`
display: flex;
font-size: ${(props)=>(props.checked? '1.7em' : '1.5em')};
color: ${(props)=>(props.checked? 'black' : 'gray')};
width: 100%;
cursor: pointer;
transition: 0.6s;
z-index: 2;
&:hover{
    color: white;
    font-size:1.7em;
}


`
export const DescriptionIcon = styled.p`
display: flex;
font-size: 20px;
width: 100%;
padding-left: 20px;
font-weight: bold;
font-family: 'Wix Madefor Display', sans-serif;
`

export const Slider = styled.div`
display: flex;
width: 80%;
background-color: #1ED764;
position: absolute;
top: 35%;
border-radius: 10px;
height: 50px;
transition: 0.6s;

`