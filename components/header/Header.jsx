import React from 'react'
import Logo from '../../assets/workablesLogo.png'
import GetStarted from '../button/getstarted'

import Link from 'next/link'
import Image from 'next/image'


export function links() {
    return [
      {
        rel:'stylesheet',
        href:styles
      }
    ]
}

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row gap-5 md:justify-between items-center mx-20 my-5'>
        <Link href='/'><Image className=' w-52' src={Logo} alt="Logo Workables" /></Link>
        <div className='flex gap-5 items-center'>
            <Link href='/login' className='cursor-pointer font-quest'>Sign in</Link>
            <GetStarted info="Get started"/>
        </div>
    </header>
  )
}

export default Header