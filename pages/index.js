/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-gray-900 w-screen h-screen overflow-x-hidden">
      <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
      <Navbar title="Home" />
      <h1 className="font-Bungee text-center text-8xl my-6">SPYSTOP</h1>
      <p className="font-Bungee text-center text-4xl">Your stop for games!</p>
      <div className="glassmorph p-4 w-7/12 mx-auto text-xl text-gray-900 my-6">
      <p className="text-center font-Bungee my-3 text-3xl">PLAY. EARN. REDEEM</p>
      Welcome to <span className="underline text-green-700">SpyStop</span>, play awesome games built almost half a decade ago, and get rewarded with our new <span className="underline text-purple-700">digital coins</span>. Redeem your coins and get <span className="underline text-yellow-500">Premium stuffs</span> for different games.
      But wait, There is a slight problem, cannot make <span className="underline text-red-500">friends</span> in online web games? well we got it covered for you!.
      <p className="text-center font-Bungee my-3 text-3xl">#We Set The Stop</p>
      </div>
      <Link href={'/gamebar'}>
        <div className="text-center">
            <button class="relative font-Bebas text-2xl inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-blue-500 group-hover:from-pink-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Play Now!
              </span>
            </button>
          </div>
        </Link>
      <Footer />
    </div>
  )
}


