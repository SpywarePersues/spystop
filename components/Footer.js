import Link from "next/link";
import { useEffect as UseEffect, useState, useState as UseState } from "react";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export default function Footer(){
    const [token, setToken] = UseState("")

    UseEffect(() => {
        setToken(localStorage.getItem('Token'))
    }, [])
    return(
        <div className="text-gray-300 mx-auto glassmorph py-10 text-sm font-light font-Koho mt-8">
            <div className="bg-gray-500 w-11/12 mx-auto h-[2px] my-3"></div>
            <div className="w-11/12 lg:w-10/12 flex flex-wrap justify-around mx-auto">
                <div className="font-Koho  font-bold">
                    <p className="text-2xl">SpyStop</p>
                    <p className="lg:pt-10">©SpyStop 2022</p>
                    <p>Created by SpywarePerseus (Supriyo). All Rights Reserved.</p>
                </div>
                <div>
                    <p className="font-Koho text-2xl font-bold mb-2">Pages</p>
                    <ul>
                        <Link href={{pathname: '/'}}><li className="hover:text-gray-100 cursor-pointer">Home</li></Link>
                        <Link href={{pathname: '/dashboard'}}><li className="hover:text-gray-100 cursor-pointer">Dashboard</li></Link>
                        <Link href={{pathname: '/store'}}><li className="hover:text-gray-100 cursor-pointer">Store</li></Link>
                        <Link href={{pathname: '/stocks'}}><li className="hover:text-gray-100 cursor-pointer">Stocks</li></Link>
                        <Link href={{pathname: '/gamebar'}}><li className="hover:text-gray-100 cursor-pointer">Game Bar</li></Link>
                        <Link href={{pathname: '/players'}}><li className="hover:text-gray-100 cursor-pointer">Players</li></Link>
                        {token ? (<Link href={{pathname: '/login'}}><li className="hover:text-gray-100 cursor-pointer">Profile</li></Link>) : (<Link href={{pathname: '/login'}}><li className="hover:text-gray-100 cursor-pointer">Login</li></Link>)}
                    </ul>
                </div>
                <div>
                <p className="font-Koho text-2xl font-bold mb-2">Contact</p>
                    <ul>
                        <Link href={{pathname: '/'}}><li className="hover:text-gray-100 cursor-pointer flex mb-3 text-md"><BsFillTelephoneFill className="mt-1" /><span className="px-2">+91 ----------</span></li></Link>
                        <Link href={{pathname: 'mailto:student.spywareperseus@gmail.com'}}><li className="hover:text-gray-100 cursor-pointer flex text-md"><MdEmail className="mt-1" /><span className="px-2">student.spywareperseus@gmail.com</span></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}