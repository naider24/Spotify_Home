import React, { createContext, useState ,useRef,useEffect} from 'react';



export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(null);
  const audioRef = useRef();
  const playMusic = (music) => {
    if (currentMusic === music) {
      if (isPlaying) {
        // Se a música atual já estiver sendo reproduzida, pausa
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Se a música atual estiver pausada, retoma a reprodução
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // Define a nova música e reproduz
      setCurrentMusic(music);
      audioRef.current.src = music.audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };


  return (
    <MusicContext.Provider value={{ currentMusic, playMusic,audioRef, isPlaying}}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider