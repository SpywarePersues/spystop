import { collection, getDocs } from 'firebase/firestore'
import React, { useState as UseState, useEffect as UseEffect } from 'react'
import { useRouter as UseRouter } from 'next/router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { db } from '../../firebaseConfig'
import Link from 'next/link'

function index() {
    const databaseRef = collection(db, 'accounts')
    const [firedata, setFiredata] = UseState()
    const router = UseRouter()
    const [answer, setAnswer] = UseState(0)
    const [balance, setBalance] = UseState(0)
    const [userPurchases, setUserPurchases] = UseState()
    const [userProfits, setUserProfits] = UseState()
    const [userLosses, setUserLosses] = UseState()
    const [userStocks, setUserStocks] = UseState()
    const [investing, setInvesting] = UseState(0)
    const [userQuizLevel, setUserQuizLevel] = UseState()
    const [userGeneralLevel, setUserGeneralLevel] = UseState()
    const [userCrypticLevel, setUserCrypticLevel] = UseState()
    const [userMathsLevel, setUserMathsLevel] = UseState()

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                if(data.data().email === localStorage.getItem('Email')){
                    setBalance(data.data().Balance)
                    setUserPurchases(data.data().Purchases)
                    setUserProfits(data.data().Profit)
                    setUserLosses(data.data().Loss)
                    setUserStocks(data.data().Stocks)
                    setUserMathsLevel(data.data().MathsLevel)
                    setUserCrypticLevel(data.data().CrypticLevel)
                    setUserGeneralLevel(data.data().GeneralLevel)
                    setUserQuizLevel(data.data().QuizLevel)
                }
            }))
        })
    }
    UseEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Navbar title="Maths for Nerds" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <h1 className='font-Bebas text-5xl text-center md:text-right text-white mx-12'>Current Level : {userMathsLevel}</h1>
            <div className='my-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                <div className='dark-glassmorph p-3'>
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 0</h1>
                    <Link href='/math/0'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 1</h1>
                    <Link href='/math/1'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 2</h1>
                    <Link href='/math/2'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 3</h1>
                    <Link href='/math/3'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 4</h1>
                    <Link href='/math/4'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 5</h1>
                    <Link href='/math/5'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 6</h1>
                    <Link href='/math/6'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 7</h1>
                    <Link href='/math/7'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 8</h1>
                    <Link href='/math/8'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 9</h1>
                    <Link href='/math/9'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>Level 10</h1>
                    <Link href='/math/10'>
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
                    <h1 className='text-3xl text-white font-Bebas text-center my-10'>More Coming Soon.</h1>
                    <div className="text-center">
                        <button class="relative font-Bebas text-2xl inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-blue-500 group-hover:from-pink-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                        <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Coming Soon.
                        </span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default index