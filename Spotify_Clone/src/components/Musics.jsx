import React , {useState, useRef, useEffect} from "react";
import { Artist, NameMusic, CardMusic, MainDiv, PlayerIconGreen, Title ,List, BorderGray} from "../styles/MusicsStyle";
import { musicData } from "./MusicData";
import { useContext } from 'react';

import Player from "./player";
import { MusicContext } from "./MusicContext";


 function Musics (){

  const { playMusic  } = useContext(MusicContext);
  
  const handleMusicClick = (musicKey) => {
    const music = musicData[musicKey];
    playMusic(music);
    
  };

    return(
        <> 
          <List>
          <Title>Escute agora</Title>
           <CardMusic style={{backgroundImage:`url(${musicData.stay.image})`}}>
                <div id ='List' style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen"
                     onClick={() =>
                        handleMusicClick('stay')}></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>Stay</NameMusic>
                    <Artist id ='artist'>Kid laroy ft. Justin Bieber</Artist>
                    </div>
                </div>
            </CardMusic>
            <CardMusic style={{backgroundImage:`url(${musicData.blindinLights.image})`, backgroundPositionY:'0px'}}>
                <div style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen"
                     onClick={() =>
                        handleMusicClick('blindinLights')}
                       ></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>Blinding Lights</NameMusic>
                    <Artist id ='artist'>the Weekend</Artist>
                    </div>
                </div>
            </CardMusic>
            <CardMusic style={{backgroundImage:`url(${musicData.signOfTheTimes.image})`}}>
                <div style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen"
                     onClick={() =>
                        handleMusicClick('signOfTheTimes')
                       }></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>Sign of the times</NameMusic>
                    <Artist id ='artist'>Harry Styles</Artist>
                    </div>
                </div>
            </CardMusic>
            <CardMusic style={{backgroundImage:`url(${musicData.leaveTheDoorOpen.image})`}}>
                <div style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen"
                     onClick={() =>
                        handleMusicClick('leaveTheDoorOpen')
                       }></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>Leave The Door Open</NameMusic>
                    <Artist id ='artist'>Bruno Mars</Artist>
                    </div>
                </div>
            </CardMusic>
            <CardMusic style={{backgroundImage:`url(${musicData.ruMine.image})`}}>
                <div style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen"
                     onClick={() =>
                        handleMusicClick('ruMine')
                       }></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>R U Mine</NameMusic>
                    <Artist id ='artist'>Arctic Monkeys</Artist>
                    </div>
                </div>
            </CardMusic>
            <CardMusic style={{backgroundImage:`url(${musicData.goosebumps.image})`}}>
                <div style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen"
                     onClick={() => 
                        handleMusicClick('goosebumps')                  
                       }></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>Goosebumps</NameMusic>
                    <Artist id ='artist'>Travis Scott</Artist>
                    </div>
                </div>
            </CardMusic>
            <CardMusic style={{backgroundImage:`url(${musicData.melhorSo.image})`, backgroundPositionY:'0px'}}>
                <div style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen"
                     onClick={() =>
                        handleMusicClick('melhorSo')  
                       }></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>Melhor só</NameMusic>
                    <Artist id ='artist'>Kayblack</Artist>
                    </div>
                </div>
            </CardMusic>
            <CardMusic style={{backgroundImage:`url(${musicData.lovely.image})`, backgroundPositionY:'0px'}}>
                <div style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen"
                     onClick={() =>
                        handleMusicClick('lovely')  
                       }></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>Lovely</NameMusic>
                    <Artist id ='artist'>Billie Eilish</Artist>
                    </div>
                </div>
            </CardMusic>    <CardMusic style={{backgroundImage:`url(${musicData.erroGostoso.image})`, backgroundPositionY:'0px'}}>
                <div style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen" 
                     onClick={() =>
                        handleMusicClick('erroGostoso')  
                       }></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>Erro gostoso</NameMusic>
                    <Artist id ='artist'>Simaria</Artist>
                    </div>
                </div>
            </CardMusic>
            <CardMusic style={{backgroundImage:`url(${musicData.glimpseOfUs.image})`, backgroundPositionY:'0px'}}>
                <div style={{display:'flex', width:'100%', padding:'20px', alignItems:'center'}}>
                    <PlayerIconGreen id="playGreen" onClick={() =>
                       handleMusicClick('glimpseOfUs')  
                     }></PlayerIconGreen>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <NameMusic id ='nameMusic'>GlimpsesOfUs</NameMusic>
                    <Artist id ='artist'>Joji</Artist>
                    </div>
                </div>
            </CardMusic>
          </List>

        </>    
    )
}

export default Musics

