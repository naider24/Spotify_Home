import React,{useState, useRef, createContext} from "react";
import { DivMusics, DivTitle, Navbar, Page } from "../styles/mainPageStyle";
import Player from "./player";

import { DivPhoto, Photo , YourName } from "../styles/photoPerfilStyle";
import {
 
  DescriptionIcon,
  DivOptionsNav,
  IconBiblioteca,
  IconHome,
  IconPlayList,
  SpotifyIcon,
 
  Slider,
} from "../styles/navBarStyle";
import Musics from "./Musics";
import { BorderGray, MainDiv } from "../styles/MusicsStyle";
import { MusicContext } from "./MusicContext";

function MainPage() {
  const {audioRef, currentMusic} = createContext(MusicContext)

  const sliderRef = useRef()
  const [slider, setSlider]= useState({home: true,lib: false, playlist:false})

  function goHome (){
    setSlider(prevState => ({ home:true, playlist:false , lib: false }));
    sliderRef.current.style.top = '35%'
  }
  function goLib(){

    setSlider(prevState => ({ home:false, playlist:false , lib: true }));
    sliderRef.current.style.top = '60%'
  }

  function goPlayList(){
    setSlider(prevState => ({ home:false, playlist:true, lib: false }));
    sliderRef.current.style.top = '85%'

  }
console.log(slider)
console.log
  return (
    <>
      <Page>
        <Navbar>
          <DivOptionsNav>
            <SpotifyIcon>
            </SpotifyIcon>
            <DivPhoto>
          <div style={{display:'flex',flexDirection:'column' ,justifyContent:'center', alignItems:'center', position:"absolute", padding:'10px' , top:'20%'}}>
          <Photo>N</Photo>
        <YourName>Nicollas</YourName>
        <div style={{width:'100%', display:'flex',justifyContent:'space-between' ,flexDirection:'column', height:'200px',paddingTop:'10px' }}> 
            <Slider ref = {sliderRef}></Slider>
               <IconHome checked={slider.home} onClick={goHome}></IconHome>       
              <IconPlayList checked={slider.lib} onClick={goLib}></IconPlayList>
              <IconBiblioteca checked={slider.playlist} onClick={goPlayList}></IconBiblioteca>
              </div>
          </div>      
        </DivPhoto>
          
          </DivOptionsNav>
          <DivMusics>
            <DivTitle> ))) <div style={{marginLeft:'10px', overflow:'hidden'}}></div> <p style={{marginTop:'28px'}}>  SPOTIFY</p></DivTitle>
            
            <MainDiv>
            {slider.home === true?<Musics></Musics>:''}
            </MainDiv>
            <BorderGray></BorderGray>
            <Player  ></Player>
           </DivMusics>  
        </Navbar>
      </Page>
    </>
  );
}

export default MainPage;
