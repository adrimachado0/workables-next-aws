'use client';
import React from 'react'
import Image from 'next/image'

const HomeSparkMainComponent = ({logo, title, text}) => {
  return (
    <div className='relative'>
        <div className=' p-1 border-workables-blue-0 border-solid border rounded-full'>
            <div className=' w-72 h-96 rounded-full px-5 gradiente-opacity'>
            </div>
        </div>
        <div className='absolute bottom-1/2 translate-y-1/2 flex flex-col items-center px-5'>
            <Image width={48} height={48} src={logo.logo} alt="Component logo" />
            <p className='font-bold text-center'>{title}</p>
            <p className='text-center font-quest'>{text}</p>
        </div>
    </div>
  )
}

export default HomeSparkMainComponent