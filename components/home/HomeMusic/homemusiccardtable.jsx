'use client';
import React, { useState, useRef } from 'react'
import HomeMusicCardTableSection from './homemusiccardtablesection'

import GottaFeelingIcon from './songIcon/iGottaFeelingIcon.jpg'
import OneKissIcon from './songIcon/OneKissIcon.jpg'

import Image from 'next/image';

const HomeMusicCardTable = () => {

  const [aside, setAside] = useState(false)
  const audioRef = useRef()
  const [currentSong, setCurrentSong] = useState(null);
  const [canciones, setCanciones] = useState([
    {
      music:'/feeling.mp3',
      song:'I Gotta Feeling',
      genre:'Pop',
      duration:'4:49',
      icon:GottaFeelingIcon,
    },
    {
      music:'/oneKiss.mp3',
      song:'One Kiss',
      genre:'Dance Pop',
      duration:'3:43',
      icon:OneKissIcon,
    },
  ])

  return (
    <div>
      {
        canciones &&
        <div className={`gradiente rounded-b-4xl pt-0.5`}>
            {
              canciones.map( canciones => (
                <HomeMusicCardTableSection 
                  key={canciones.music}
                  canciones={canciones}
                  audioRef={audioRef}

                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}

                  aside={aside}
                  setAside={setAside}
                />
              ))
            }
        </div>
      }
      {
        currentSong && 
        <div className={`bg-red-300 ${aside ? 'fixed' : 'hidden'} bottom-0 left-0 w-full`}>
            <div className='py-5 px-10 flex items-center gap-3'>
                <Image className='w-20 rounded-lg' src={currentSong.icon} alt="Icon music" />
                <div className='w-full flex justify-between'>
                    <div>
                      <p>{currentSong.song}</p>
                      <p>{currentSong.genre}</p>
                    </div>
                        {/* <p onClick={() => {console.log(audioRef.current.duration)}}>Duration: 4:49</p> */}
                    <div>
                      <p>a</p>
                    </div>
                    <audio
                        ref={audioRef}
                        src={currentSong.music}
                        autoPlay
                        controls
                    />
                </div>
            </div>
        </div>
      }
    </div>
  )
}

export default HomeMusicCardTable