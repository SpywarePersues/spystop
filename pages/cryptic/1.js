import React, { useEffect as UseEffect, useState, useState as UseState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useRouter as UseRouter } from 'next/router'
import { db } from '../../firebaseConfig'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function one() {
    
    const databaseRef = collection(db, 'accounts')
    const [firedata, setFiredata] = UseState()
    const router = UseRouter()
    const [answer, setAnswer] = UseState("")
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
    const [userLogoLevel, setUserLogoLevel] = UseState()

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
                    setUserLogoLevel(data.data().LogoLevel)
                    if(data.data().CrypticLevel === 1){
                    }
                    else {
                        router.push('/cryptic')
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
            <Navbar title="Lvl - 1 Cryptic Hunt" />
            <img src="../../wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <ToastContainer />
            <h1 className='font-Bungee text-5xl text-white text-center mb-6'>Level 1</h1>
            <h1 className='font-Bebas text-5xl text-white text-center my-10'>Greetings</h1>
            <h1 className='text-white my-4 mx-10 text-center font-Bebas text-2xl'>Enter the answer like this: if the answer is hello my friend, write hellomyfriend in SMALL Letters.</h1>
            <input className="glassmorph p-3 w-6/12 mx-auto block text-white outline-none" onChange={event => setAnswer(String(event.target.value))}/>
            <button className="font-Bebas text-center button mt-2 bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit py-2 rounded-md text-xl mx-auto block" onClick={async () => {
                                if(answer === "relationship"){
                                    const docRef = await updateDoc(doc(db, 'accounts', `${localStorage.getItem('Email')}`), {
                                        Username: localStorage.getItem('Name'),
                                        Balance: balance + 100,
                                        email: localStorage.getItem('Email'),
                                        Purchases: userPurchases,
                                        Stocks: userStocks,
                                        Profit: userProfits,
                                        Loss: userLosses,
                                        pfp: localStorage.getItem('PFP'),
                                        MathsLevel: userMathsLevel,
                                        CrypticLevel: userCrypticLevel + 1,
                                        GeneralLevel: userGeneralLevel,
                                        QuizLevel: userQuizLevel,
                                        LogoLevel: userLogoLevel,
                                    });
                                    getData()
                                    router.push('/cryptic')
                                    notify2()
                                }
                                else {
                                    notify()
                                }
                            }}>SUBMIT</button>
            <Footer />
        </div>
    )
}

export default one