import React, {useState, useRef, useEffect, useContext} from "react";
import Goosebumps from '../imagens/Goosebumps.jpg'
import {
  DivPlayer,
  Arrow,
  BarProgress,

  MusicInformation,
  PlayMusic,
  Volume,
  Play,
  Time,
  Random,
  Loop,
  Informations,
  ImageAlbum,
  ArtistAndMusic,
  NameMusic,
  Artist,
  ControlVolume,
  IconSound,
  BarSound,
  Pause,
} from "../styles/playerStyle";[]
import { MusicContext } from "./MusicContext";
 
function Player( ) {
  const { isPlaying ,currentMusic, audioRef, playMusic} = useContext(MusicContext); 
  const [volume, setVolume] = useState(1)
  const soundRef = useRef()
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [alternateIcon, setAlternateIcon] = useState()  

  console.log(audioRef)
 

  useEffect(() => {
   
   
    const updateProgress = () => {
      const { currentTime, duration } = audioRef.current;
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      setCurrentTime(currentTime);
    };
   
      audioRef.current.addEventListener('timeupdate', updateProgress);

    
   if (currentMusic) {
    
   }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      
      audioRef.current.volume = volume;
    }
  }, [volume]);
  const getFormattedDuration = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      return handleTimeFormat(audioRef.current.duration);
    } else {
      return "00:00";
    }
  };

  function togglePlay() {
    playMusic(currentMusic)
  }



  const handleTimeFormat = (time) => {
    // Função para formatar o tempo no formato mm:ss
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
  };

  useEffect(() => {
    setAlternateIcon(isPlaying);

  }, [isPlaying])


  return (
    <DivPlayer>
      <MusicInformation>
        <Informations>
            <ImageAlbum style={{ backgroundImage: `url(${currentMusic?.image})` }} ></ImageAlbum>
            <ArtistAndMusic>
            <NameMusic>{currentMusic?.name}</NameMusic>
            <Artist>{currentMusic?.artist}</Artist>
            </ArtistAndMusic>
        </Informations>
      </MusicInformation>
      <PlayMusic>
        <div style={{ width: "100%" , display:'flex', justifyContent:'center',zIndex:'5', alignItems:'center',borderRight:'1 px solid gray'}}>
           <Random></Random>
          <Arrow style={{ transform: "rotate(180deg)" }}></Arrow>
          {isPlaying ? (
            <Pause onClick={togglePlay}></Pause>
           
          ) : (
            <Play onClick={togglePlay}></Play>
            
          )}
          <Arrow></Arrow>
          <Loop></Loop>
        </div>
        <div style = {{width:'100%', display:'flex', justifyContent:'center', zIndex:'5',alignItems:'center',}}>
        <Time style={{ paddingRight: '10px' }}>{handleTimeFormat(currentTime)}</Time>
        <BarProgress><div style={{height:'100%', backgroundColor:'white',width: `${progress}%` ,borderRadius:'5px'}}></div></BarProgress>
        <Time style={{ paddingLeft: '10px' }}>{getFormattedDuration()}</Time>
        </div>
      </PlayMusic>
      <Volume>
        <ControlVolume>
          <IconSound>
        </IconSound>
        <BarSound 
        type="range"
        min={0}
        max={100} // Defina o valor máximo do input range
        ref={soundRef}
        defaultValue={100} // Defina o valor padrão para 100
        value={volume * 100} // Multiplique o volume por 100 para mapear para a faixa de 0 a 100
        onChange={(event) => {
          const normalizedVolume = event.target.value / 100; // Normalize o valor para a faixa de 0 a 1
          setVolume(normalizedVolume);

        }}
        style={{
          backgroundImage: `linear-gradient(to right, #1ED764, #1ED764 ${
            volume * 100
          }%, gray ${volume * 100}%, gray)`,
        }}
        ></BarSound>
        </ControlVolume>
      </Volume>
    </DivPlayer>
  );
}

export default Player;
