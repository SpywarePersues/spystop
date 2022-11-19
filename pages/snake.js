import React from 'react'
import Navbar from '../components/Navbar'

function snake() {
    return (
        <div className='w-full h-full'>
            <Navbar />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <iframe src='https://snakemaster.vercel.app/' className='h-screen w-full' />
        </div>
    )
}

export default snake