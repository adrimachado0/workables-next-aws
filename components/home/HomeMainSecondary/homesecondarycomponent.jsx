import React from 'react'

import Image from 'next/image'

const HomeSecondaryComponent = ({logo, title, text}) => {
  return (
    <div className='flex flex-col gap-4 items-center'>
        <Image width={logo.width} height={logo.height} src={logo.logo} alt="Component logo" />
        <p className='text-2xl text-center font-quest'>{title}</p>
        <p className='text-center font-quest'>{text}</p>
    </div>
  )
}

export default HomeSecondaryComponent