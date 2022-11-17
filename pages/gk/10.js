import React, { useEffect as UseEffect, useState as UseState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useRouter as UseRouter } from 'next/router'
import { db } from '../../firebaseConfig'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ten() {
    
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
                    if(data.data().GeneralLevel === 10){
                    }
                    else {
                        router.push('/gk')
                    }
                }
            }))
        })
    }
    UseEffect(() => {
        getData()
    }, [])

    UseEffect(() => {
        
    }, [])

    const notify = () => toast.error("Incorrect Answer");
    const notify2 = () => toast.success("Correct Answer");
    return (
        <div>
            <Navbar title="Lvl - 10 General Knowledge" />
            <img src="../../wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <ToastContainer />
            <h1 className='font-Bungee text-5xl text-white text-center mb-6'>Level 10</h1>
            <h1 className='font-Bebas text-5xl text-white text-center my-10'>first person to step on moon</h1>
            <div className='md:flex w-10/12 md:w-[37%] mx-auto'>
                <h1 className='text-white text-xl my-4 mx-10 font-Bebas'>1) Neil Armstrong</h1>
                <h1 className='text-white text-xl my-4 mx-10 font-Bebas'>2) Neel Armstrong</h1>
            </div>
            <div className='md:flex w-10/12 md:w-[37%] mx-auto mb-10'>
                <h1 className='text-white text-xl my-4 mx-10 font-Bebas'>3) Niel Armstrong</h1>
                <h1 className='text-white text-xl my-4 mx-10 font-Bebas'>4) Niel Armweak</h1>
            </div>
            <h1 className='text-white my-4 mx-10 text-center font-Bebas text-2xl'>Enter the option number only, For example 1, 2, 3, 4.</h1>
            <input className="glassmorph p-3 w-6/12 mx-auto block text-white outline-none" type="number" onChange={event => setAnswer(Number(event.target.value))}/>
            <button className="font-Bebas text-center button mt-2 bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit py-2 rounded-md text-xl mx-auto block" onClick={async () => {
                                if(answer === 1){
                                    const docRef = await updateDoc(doc(db, 'accounts', `${localStorage.getItem('Email')}`), {
                                        Username: localStorage.getItem('Name'),
                                        Balance: balance + 500,
                                        email: localStorage.getItem('Email'),
                                        Purchases: userPurchases,
                                        Stocks: userStocks,
                                        Profit: userProfits,
                                        Loss: userLosses,
                                        pfp: localStorage.getItem('PFP'),
                                        MathsLevel: userMathsLevel,
                                        CrypticLevel: userCrypticLevel,
                                        GeneralLevel: userGeneralLevel + 1,
                                        QuizLevel: userQuizLevel,
                                    });
                                    getData()
                                    notify2()
                                    router.push('/gk')
                                }
                                else {
                                    notify()
                                }
                            }}>SUBMIT</button>
            <Footer />
        </div>
    )
}

export default ten