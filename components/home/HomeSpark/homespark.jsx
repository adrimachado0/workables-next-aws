import React from 'react';
import HomeSparkMain from './homesparkmain';

const HomeSpark = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <h2 className='home-spark-title lowercase text-9xl font-quest font-bold opacity-10'>Spark with us</h2>
        <div>
            <HomeSparkMain />
        </div>
        <p className='text-3xl'>Collaboration is the key to bringing brands{"'"} compaings to life.</p>
    </div>
  )
}

export default HomeSpark