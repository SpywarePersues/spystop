import React, { useEffect as UseEffect, useState as UseState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useRouter as UseRouter } from 'next/router'
import { db } from '../../firebaseConfig'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'

function eight() {
    
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
                    if(data.data().MathsLevel === 8){
                    }
                    else {
                        router.push('/math')
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
    return (
        <div>
            <Navbar title="Lvl - 8 Maths for Nerds" />
            <img src="../../wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <h1 className='font-Bungee text-5xl text-white text-center mb-6'>Level 8</h1>
            <h1 className='font-Bebas text-5xl text-white text-center my-10'>Square of 962</h1>
            <input className="glassmorph p-3 w-6/12 mx-auto block text-white outline-none" type="number" onChange={event => setAnswer(Number(event.target.value))}/>
            <button className="font-Bebas text-center button mt-2 bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit py-2 rounded-md text-xl mx-auto block" onClick={async () => {
                                if(answer === 925444){
                                    const docRef = await updateDoc(doc(db, 'accounts', `${localStorage.getItem('Email')}`), {
                                        Username: localStorage.getItem('Name'),
                                        Balance: balance + 300,
                                        email: localStorage.getItem('Email'),
                                        Purchases: userPurchases,
                                        Stocks: userStocks,
                                        Profit: userProfits,
                                        Loss: userLosses,
                                        pfp: localStorage.getItem('PFP'),
                                        MathsLevel: userMathsLevel + 1,
                                        CrypticLevel: userCrypticLevel,
                                        GeneralLevel: userGeneralLevel,
                                        QuizLevel: userQuizLevel,
                                    });
                                    getData()
                                    router.push('/math')
                                }
                                else {
                                    alert('Wrong Answer.')
                                }
                            }}>SUBMIT</button>
            <Footer />
        </div>
    )
}

export default eight