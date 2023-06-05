import React, { useContext, useEffect } from 'react';
import { MusicContext } from './MusicContext';

const AudioPlayer = () => {
    const { currentMusic, audioRef } = useContext(MusicContext);
  
    useEffect(() => {
    
  
      return () => {
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }, [currentMusic, audioRef]);
  
    const handleLoadedMetadata = () => {
      audioRef.current.play();
    };
  
    return <audio ref={audioRef} />;
  };
  
  export default AudioPlayer;
  