import React from 'react'

import HomeHelpYouLeft from './homehelpyouleft';
import HomeHelpYouRight from './homehelpyouright';
import Women from './img/getpaidwomen.png'
import Men from './img/getpaidmen.png'

import Announcers from './icons/announcers.png'
import Copywriters from './icons/copywriters.png'
import Songwriters from './icons/songwriters.png'
import Vocalists from './icons/vocalists.png'

import Image from 'next/image';

import GetStarted from '../../button/getstarted';

const HomeHelpYou = () => {
  return (
    <div className='my-52 flex flex-col gap-5'>
        <div className='grid grid-cols-2 gap-20 items-center'>
            <HomeHelpYouLeft />
            <HomeHelpYouRight />
        </div>
        <div className='gradiente p-0.5 rounded-5xl'>
            <div className='prueba-shadow rounded-5xl'>
                <div className='bg-white z-20 w-full flex justify-between rounded-5xl overflow-hidden'>
                    <Image className='-ml-4' height={250} src={Women} alt="Women image" />
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='text-center'>
                            <p className='text-3xl nordique-regular lowercase'>Get paid worldwide</p>
                            <p>Join our global talent network</p>
                        </div>
                        <div className='flex gap-14'>
                            <div className='flex flex-col items-center justify-between'>
                            <   Image width={43} src={Vocalists} alt="Logo icon"/>
                                <p>vocalists</p>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                <Image width={43} src={Copywriters} alt="Logo icon"/>
                                <p>vocalists</p>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                <Image width={43} src={Announcers} alt="Logo icon"/>
                                <p>vocalists</p>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                <Image width={43} src={Songwriters} alt="Logo icon"/>
                                <p>vocalists</p>
                            </div>
                        </div>
                        <GetStarted info="Join us" />
                    </div>
                    <Image height={250} src={Men} alt="Men image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHelpYou