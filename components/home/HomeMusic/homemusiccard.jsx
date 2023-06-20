import React from 'react'
import HomeMusicCardTable from './homemusiccardtable'
import CardImage from './img/HomeMusicCardImage.png'

import Image from 'next/image'

const HomeMusicCard = () => {
  return (
    <div className=''>
      <div className='gradiente rounded-5xl p-0.5'>
        <div className='pt-5 pb-3 bg-white flex flex-col gap-3 rounded-5xl'>
            <div>
                <Image height={224} src={CardImage} alt='Image card' />
            </div>
            <HomeMusicCardTable />
        </div>
      </div>
    </div>
  )
}

export default HomeMusicCard