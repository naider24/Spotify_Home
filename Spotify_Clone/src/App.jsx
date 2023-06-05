import { useState } from 'react'
import MainPage from './components/MainPage'
import MusicProvider from './components/MusicContext'
import AudioPlayer from './components/AudioPlayer'


function App() {
 
  return (
    <MusicProvider>
    <AudioPlayer></AudioPlayer>
    <MainPage></MainPage>
    </MusicProvider>   
  )
}

export default App
