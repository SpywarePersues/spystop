import Link from 'next/link'
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function gamebar() {
    const [token, setToken] = UseState("")

    UseEffect(() => {
        setToken(localStorage.getItem('Token'))
    }, [])
    return (
        <div>
            <Navbar title="Gamebar" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            {token ? (            <div className='my-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                <div className='dark-glassmorph p-3'>
                    <h1 className='text-3xl text-white font-Bebas text-center'>Maths for nerds</h1>
                    <p className='text-md text-white font-Bebas text-center my-3'>Do you like basic maths that you studied in your primary school? Well you can also earn points by doing these questions!</p>
                    <Link href='/math'>
                    <div className="text-center">
                        <button class="relative font-Bebas text-2xl inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-blue-500 group-hover:from-pink-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                        <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Play Now
                        </span>
                        </button>
                    </div>
                    </Link>
                </div>
                <div className='dark-glassmorph p-3'>
                    <h1 className='text-3xl text-white font-Bebas text-center'>Cryptic Hunt</h1>
                    <p className='text-md text-white font-Bebas text-center my-3'>Do you like solving tricky questions? Dont Buzz your mind, This game is for you only, I assure you will not regret it!</p>
                    <div className="text-center">
                        <button class="relative font-Bebas text-2xl inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-blue-500 group-hover:from-pink-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                        <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Play Now
                        </span>
                        </button>
                    </div>
                </div>
                <div className='dark-glassmorph p-3'>
                    <h1 className='text-3xl text-white font-Bebas text-center'>General Knowledge</h1>
                    <p className='text-md text-white font-Bebas text-center my-3'>I think you should have general knowledge, should not you? Well I think you need to some help while answering these questions, Dont forget to use Google!</p>
                    <Link href='/gk'>
                    <div className="text-center">
                        <button class="relative font-Bebas text-2xl inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-blue-500 group-hover:from-pink-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                        <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Play Now
                        </span>
                        </button>
                    </div>
                    </Link>
                </div>
                <div className='dark-glassmorph p-3'>
                    <h1 className='text-3xl text-white font-Bebas text-center'>Tech Quiz</h1>
                    <p className='text-md text-white font-Bebas text-center my-3'>Do you like Tech quizzes? do you not? well...it is not that hard, just try you will get the answers! of course using Google...Who created google? </p>
                    <div className="text-center">
                        <button class="relative font-Bebas text-2xl inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-blue-500 group-hover:from-pink-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                        <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Play Now
                        </span>
                        </button>
                    </div>
                </div>
                <div className='dark-glassmorph p-3'>
                    <h1 className='text-3xl text-white font-Bebas text-center'>More Coming Soon</h1>
                </div>
            </div>) : (<div className="font-Bungee text-center text-6xl">You need to login first.</div> )}
            <Footer />
        </div>
    )
}

export default gamebar