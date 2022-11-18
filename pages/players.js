/* eslint-disable @next/next/no-img-element */
import { db } from '../firebaseConfig'
import { arrayUnion, collection, doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import Navbar from "../components/Navbar";
import { useRouter as UseRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function players(){
    const router = UseRouter()
    const databaseRef = collection(db, 'accounts')
    const databaseRef2 = collection(db, 'accounts')
    const [firedata, setFiredata] = UseState([])
    const [email, setEmail] = UseState("")
    
    UseEffect(() => {
        getData()
    }, [])

    const [balance, setBalance] = UseState()
    const [newBalance, setNewbalance] = UseState()

    const getData = async () => {
        await getDocs(query(databaseRef, orderBy('Balance', 'desc')))
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }
    const getAccountsData = async () => {
        await getDocs(databaseRef2)
        .then((response) => {
            response.docs.map((data) => {
                if(data.data().email === localStorage.getItem('Email')){
                    setBalance(data.data().Balance)
                }
            })
        })
    }
    getAccountsData()
    const [token, setToken] = UseState()

    UseEffect(() => {
        setToken(localStorage.getItem('Token'))
    }, [])

    UseEffect(() => {
        setEmail(localStorage.getItem('Email'))
    }, [])

    

    return(
        <div className=''>
            <Navbar title="Store" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <h1 className='text-6xl font-Bungee text-center pb-5 pt-5 font-semibold'>Players</h1>
            {token ? (<div className='my-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'>
                {firedata.map((data) => {
                    return(
                        <div key={data.id} className="dark-glassmorph md:mx-10 mx-4 w-11/12 rounded-lg hover:scale-[1.01] transition-scale duration-300 my-3 p-4">
                            <div className='md:flex'>
                            <img src={data.pfp} className="rounded-md h-[5.5rem] mx-auto md:mx-0" alt='' />
                            <h1 className='font-bold my-7 mx-4 font-mono text-xl text-gray-200'>{data.Username}</h1>
                            <h1 className='mx-4 text-gray-300 font-Bebas md:text-2xl my-7'><img src="./coin.gif" className="w-5 inline-flex"/> {data.Balance}</h1>
                            <h1 className='mx-4 text-gray-300 font-Bebas md:text-xl my-7 text-gray-200'><img src="./coin.gif" className="w-5 inline-flex" /> Stocks: {data.Stocks}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>) : (<h1 className='text-6xl font-Bungee text-center'>Login first.</h1>)}
            <Footer />
        </div>
    )
}