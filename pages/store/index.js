/* eslint-disable @next/next/no-img-element */
import { db } from '../../firebaseConfig'
import { arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect as UseEffect, useState, useState as UseState } from 'react'
import Navbar from "../../components/Navbar";
import { useRouter as UseRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index(){
    const router = UseRouter()
    const databaseRef = collection(db, 'items')
    const databaseRef2 = collection(db, 'accounts')
    const [firedata, setFiredata] = UseState([])
    const [email, setEmail] = UseState("")
    const [userProfit, setUserProfit] = UseState()
    const [userLoss, setUserLoss] = UseState()
    const [userStocks, setUserStocks] = UseState()
    const [userQuizLevel, setUserQuizLevel] = UseState()
    const [userGeneralLevel, setUserGeneralLevel] = UseState()
    const [userCrypticLevel, setUserCrypticLevel] = UseState()
    const [userMathsLevel, setUserMathsLevel] = UseState()
    const [userLogoLevel, setUserLogoLevel] = UseState()

    
    UseEffect(() => {
        getData()
    }, [])

    const [balance, setBalance] = UseState()
    const [newBalance, setNewbalance] = UseState()

    const getData = async () => {
        await getDocs(databaseRef)
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
                    setUserProfit(data.data().Profit)
                    setUserLoss(data.data().Loss)
                    setUserStocks(data.data().Stocks)
                    setUserMathsLevel(data.data().MathsLevel)
                    setUserCrypticLevel(data.data().CrypticLevel)
                    setUserGeneralLevel(data.data().GeneralLevel)
                    setUserQuizLevel(data.data().QuizLevel)
                    setUserLogoLevel(data.data().LogoLevel)

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

    const notify = () => toast.error("You do not have enough money to purchase this.");
    const notify2 = () => toast.success("Successfully Purchased!!");


    return(
        <div className=''>
            <Navbar title="Store" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <ToastContainer />
            <h1 className='text-6xl font-Bungee text-center pb-5 pt-5 font-semibold'>Deal of the Month</h1>
            {token ? (<div className='my-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                {firedata.map((data) => {
                    return(
                        <div key={data.id} className="dark-glassmorph md:mx-10 mx-4 w-11/12 rounded-lg hover:scale-105 transition-scale duration-300 my-3 p-4">
                            <img src={data.image} className="rounded-md w-full h-[13.5rem]" alt='' />
                            <h1 className='font-bold my-2 mt-4 mx-4 font-mono text-xl text-gray-200'>{data.name}</h1>
                            <h1 className='my-4 mx-4 text-gray-300 font-Bebas md:text-xl'><img src="./coin.gif" className="w-5 inline-flex"/> {data.price}</h1>
                            <button className="font-Bebas text-center button mt-2 bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit mx-4 py-2 my-3 rounded-md text-xl" onClick={async () => {
                                if(balance >= data.price){
                                    console.log(balance- data.price)
                                    const docRef = await updateDoc(doc(db, 'accounts', `${localStorage.getItem('Email')}`), {
                                        Username: localStorage.getItem('Name'),
                                        Balance: balance - data.price,
                                        email: localStorage.getItem('Email'),
                                        Stocks: userStocks,
                                        Profit: userProfit,
                                        Loss: userLoss,
                                        Purchases: arrayUnion({item: data.name, image: data.image, price: data.price, answer: data.answer}),
                                        pfp: localStorage.getItem('PFP'),
                                        MathsLevel: userMathsLevel,
                                        CrypticLevel: userCrypticLevel,
                                        GeneralLevel: userGeneralLevel,
                                        QuizLevel: userQuizLevel,
                                        LogoLevel: userLogoLevel,
                                    });
                                    notify2()
                                    getAccountsData()
                                }
                                else {
                                    notify()
                                }
                            }}>REDEEM</button>
                        </div>
                    )
                })}
            </div>) : (<h1 className='text-6xl font-Bungee text-center'>Login first to buy things.</h1>)}
            <Footer />
        </div>
    )
}