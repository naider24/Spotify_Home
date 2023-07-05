import styled from "styled-components";
import {MdKeyboardArrowRight} from 'react-icons/md'
import {BsPlayCircle} from 'react-icons/bs'
import {FaRandom} from 'react-icons/fa'
import {RxLoop} from 'react-icons/rx'
import {AiOutlineSound,AiOutlinePauseCircle} from 'react-icons/ai'
import {CgLoadbarSound} from 'react-icons/cg'


export const DivPlayer = styled.div`
flex:1;
width: 100%;
display: flex;
padding-top: 20px;
padding-block: 20px;
z-index: 3;
;

@media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`


export const MusicInformation = styled.div`
flex:1;
display: flex;
height: 100%;
width: 100%;
align-items: center;



@media only screen and (max-width: 1200px) {
  
  flex:2;
 
 }
`

export const PlayMusic = styled.div`
flex:3;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Volume = styled.div`
flex:1;
display: flex;
height: 100%;
align-items: center;
justify-content: center;
@media only screen and (max-width: 1200px) {
  
  flex:0.5;
 
 }
@media only screen and (max-width: 768px) {
  
 display: none;

}


`
export const IconSound =styled(CgLoadbarSound)`

display: flex;
font-size: 30px;
color: white;
padding: 10px;
cursor: pointer;
transition: 0.6s;
&:hover{
 color: #37F07D;
}`


export const Pause =styled(AiOutlinePauseCircle)`
font-size: 40px;
color: white; 
padding: 10px;
cursor: pointer;
transition: 0.6s;
&:hover{
 color: #37F07D;
}`


export const BarSound = styled.input`
  appearance: none;
  margin-right: 15px;
  width: 200px;
  height: 7px;
  background: white;
  border-radius: 5px;
  background-image: linear-gradient(#1ED764, #1ED764);
  background-repeat: no-repeat;

&::-webkit-slider-thumb {

    -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}
  

`

export const ControlVolume = styled.div`
display: flex;
height: 100%;
width: 100%;
border-left: 1px solid gray;
align-items: center;
justify-content: center;
`
export const ImageAlbum = styled.div`
width: 78px;
height: 82px;

background-size:cover;
border-radius: 10px;
background-repeat: no-repeat;
background-position: center center;


`
export const Informations = styled.div`
display: flex;
height: 100%;
width: 100%;
border-right: 1px solid gray;
align-items: center;

@media only screen and (max-width: 768px) {
    justify-content:center;
  }
;

`

export const ArtistAndMusic = styled.div`
display: flex;
flex-direction: column;
padding:10px;
height: 80%;
align-items: center;
justify-content: center;

`
export const NameMusic = styled.p`

margin: 0px;
width: 100%;
color: #1ED764;
font-weight: bold;
padding: 5px;
font-family: 'Wix Madefor Display', sans-serif;

`
export const Artist= styled.p`
margin: 0px;
width: 100%;
color: gray;
padding: 5px;
font-family: 'Wix Madefor Display', sans-serif;

`
export const BarProgress = styled.div`
width: 50%;
background-color: #8A8A8A;
height: 0.5em;
border-radius: 5px;
`
export const Arrow = styled(MdKeyboardArrowRight)`
display: flex;
font-size: 30px;
color: white;

cursor: pointer;
transition: 0.6s;
&:hover{
 color: #37F07D;
}

`
export const Random = styled(FaRandom)`

display: flex;
font-size: 20px;
color: white;
padding: 10px;
cursor: pointer;
transition: 0.6s;
&:hover{
 color: #37F07D;
}

`
export const Loop = styled(RxLoop)`

display: flex;
font-size: 20px;
color: white;
padding: 10px;
cursor: pointer;
transition: 0.6s;
&:hover{
 color: #37F07D;
}

`


export const Play = styled(BsPlayCircle)`

font-size: 40px;
color: white; 
padding: 10px;
cursor: pointer;
transition: 0.6s;
&:hover{
 color: #37F07D;
}

`
export const Time = styled.p`
margin:0;
font-size: 15px;
color: white;
font-family: 'Wix Madefor Display', sans-serif;

`