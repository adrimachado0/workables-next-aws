import React from 'react'

import GetStarted from '../../button/getstarted'
import HomeMusicCard from './homemusiccard'

const HomeMusic = () => {

  return (
    <div className='grid grid-cols-[500px_480px] items-center justify-around'>
        <div>
            <h3 className='lowercase px-0.5 music-title-gradient text-6xl font-bold'>These are some songs we made</h3>
            <p>Here is some of the work weve done with huge brands and artists.</p>
            <GetStarted info='sing up' />  
        </div>
        <HomeMusicCard />

          {/* <div className={`bg-red-300 ${aside ? 'fixed' : 'hidden'} bottom-0 left-0 w-full`}>
            <h2>Reproductor de Música</h2>
              <div className="current-song">
                <audio
                  ref={audioRef}
                  src={currentSong}
                  autoPlay
                  onPause={isPlaying}
                  controls
                />
                <button onClick={pausarAudio}>prueba</button>
              </div>
              <button onClick={() => {setAside(false); pausarAudio()}}>Cerrar</button>
          </div> */}
    </div>
  )
}

export default HomeMusic