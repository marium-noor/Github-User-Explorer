import React from 'react'
import image1 from '../images/github.png'

function Home() {
  return (
    <div className='w-full p-2 text-center text-indigo-200 space-y-2 h-auto m-5 flex justify-center items-center flex-col'>
        <div>
            <h1 className='text-2xl md:text-3xl font-bold uppercase'>Github User Explorer!!</h1>
            <p className='text-md md:text-lg'>Explore your github profile with Seemless features!!</p>
            <img src={image1} alt="" />
        </div>
    </div>
  )
}

export default Home