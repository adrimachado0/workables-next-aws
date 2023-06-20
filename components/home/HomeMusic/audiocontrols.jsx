import React, { useState, useEffect } from 'react'

import Image from 'next/image'

import Previous from './controlicon/previous.png'
import Next from './controlicon/next.png'
import Play from './controlicon/play.png'
import Pause from './controlicon/pause.png'

const AudioControls = ({pause, setPause, audioRef, currentSong, setCurrentSong, canciones}) => {

    const handleClickPlay = () => {
        if(audioRef.current.paused) {
            setPause(false)
            return audioRef.current.play()
        } else {
            setPause(true)
            return audioRef.current.pause()
        }
    }

    const handleClickPrevious = () => {
        const cancionPrevia = canciones.filter(cancion => cancion.id === currentSong.id - 1)
        setCurrentSong(cancionPrevia[0])
    }

    const handleClickNext = () => {
        const cancionPrevia = canciones.filter(cancion => cancion.id === currentSong.id + 1)
        setCurrentSong(cancionPrevia[0])
    }

    return (
        <div className='w-full flex gap-4 items-center justify-between'>
            <div className='flex gap-4 items-center'>
                {
                    currentSong.id === 1
                    ?   <button>
                            <Image className='  opacity-20' src={Previous} width={15} alt="Icon controller" />
                        </button>
                    :   <button onClick={handleClickPrevious}>
                            <Image src={Previous} width={15} alt="Icon controller" />
                        </button>
                }
                <button onClick={handleClickPlay} className='text-white focus:outline-none bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                    {
                        pause
                        ? <Image src={Play} width={10} alt="Icon controller"/>
                        : <Image src={Pause} width={10} alt="Icon controller"/>
                    }
                </button>
                {
                    currentSong.id < canciones.length
                    ?   <button onClick={handleClickNext}>
                            <Image src={Next} width={15} alt="Icon controller" />
                        </button>
                    :   <button className='opacity-20'>
                            <Image src={Next} width={15} alt="Icon controller" />
                        </button>
                }
            </div>
        </div>
    )
}

export default AudioControls