import React, { createContext, useState ,useRef,useEffect} from 'react';



export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [currentMusic, setCurrentMusic] = useState(null);
  const audioRef = useRef();

  const playMusic = (music) => {
    if (currentMusic === music) {
      // Se a música atual já estiver sendo reproduzida, pausa
      audioRef.current.pause();
      setCurrentMusic(null);
    } else {
      // Define a nova música e reproduz
      setCurrentMusic(music);
      audioRef.current.src = music.audioUrl;
      audioRef.current.play();
    }
  };


  return (
    <MusicContext.Provider value={{ currentMusic, playMusic,audioRef}}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider