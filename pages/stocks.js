/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db } from '../firebaseConfig'
import { collection, doc, getDocs, orderBy, query, updateDoc } from 'firebase/firestore'
import Footer from "../components/Footer";
import CoinsGraph from "../components/charts/CoinsGraph";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const data = {
    labels: ["13 Nov", "15 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov"],
    datasets: [
        {
        label: "Price per unit",
        data: [902, 420, 780, 1004, 2045, 3400],
        fill: true,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)"
        },
    ]
};

export default function Dashboard(){

    const databaseRef = collection(db, 'accounts')
    const [firedata, setFiredata] = useState()
    const [mounted, setMounted] = useState(false)
    const [balance, setBalance] = useState(0)
    const [userPurchases, setUserPurchases] = useState()
    const [userProfits, setUserProfits] = useState()
    const [userLosses, setUserLosses] = useState()
    const [userStocks, setUserStocks] = useState()
    const [investing, setInvesting] = useState(0)
    const [converting, setConverting] = useState(0)
    const [userQuizLevel, setUserQuizLevel] = useState()
    const [userGeneralLevel, setUserGeneralLevel] = useState()
    const [userCrypticLevel, setUserCrypticLevel] = useState()
    const [userMathsLevel, setUserMathsLevel] = useState()


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
                    setMounted(true)
                }
            }))
        })
    }
    useEffect(() => {
        getData()
    }, [])

    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem('Token'))
    }, [])

    const notify = () => toast.error("You do not have enough money to invest in.");
    const notify2 = () => toast.success("Successfully Invested!");
    const notify3 = () => toast.error("You do not have enough stocks to convert it to In-game balance.");
    const notify4 = () => toast.success("Successfully Converted!");

    const databaseRef2 = collection(db, 'accounts')
    return(
        <div className="">
            <Navbar title="Stocks" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            {
                mounted ? 
                token ? 
                <div>
                    <ToastContainer />
                    <div className="dark-glassmorph w-8/12 mx-auto p-3">
                        <h1 className="font-Bebas text-4xl text-white text-center my-4">STOCKS GRAPH</h1>
                        <Line data={data} />
                    </div>
                    <h1 className="text-white text-center text-4xl my-6 font-Bebas">INVEST</h1>
                    <label className="text-center mx-auto block my-4 text-2xl text-white font-Bebas" >Money to invest</label>
                    <input className="glassmorph p-3 w-6/12 mx-auto block text-white outline-none" type="number" onChange={event => setInvesting(Number(event.target.value))}/>
                    <button className="font-Bebas text-center button mt-2 bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit py-2 rounded-md text-xl mx-auto block" onClick={async () => {
                                if(balance >= investing){
                                    const docRef = await updateDoc(doc(db, 'accounts', `${localStorage.getItem('Email')}`), {
                                        Username: localStorage.getItem('Name'),
                                        Balance: balance- investing,
                                        email: localStorage.getItem('Email'),
                                        Purchases: userPurchases,
                                        Stocks: userStocks + investing,
                                        Profit: userProfits,
                                        Loss: userLosses,
                                        pfp: localStorage.getItem('PFP'),
                                        MathsLevel: userMathsLevel,
                                        CrypticLevel: userCrypticLevel,
                                        GeneralLevel: userGeneralLevel,
                                        QuizLevel: userQuizLevel,
                                    });
                                    notify2()
                                    getData()
                                }
                                else {
                                    notify()
                                }
                            }}>INVEST</button>
                            <h1 className="text-white text-center text-4xl my-6 font-Bebas">STOCKS TO IN-GAME BALANCE</h1>
                    <label className="text-center mx-auto block my-4 text-2xl text-white font-Bebas" >Money to convert</label>
                    <input className="glassmorph p-3 w-6/12 mx-auto block text-white outline-none" type="number" onChange={event => setConverting(Number(event.target.value))}/>
                    <button className="font-Bebas text-center button mt-2 bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit py-2 rounded-md text-xl mx-auto block" onClick={async () => {
                                if(userStocks >= converting){
                                    const docRef = await updateDoc(doc(db, 'accounts', `${localStorage.getItem('Email')}`), {
                                        Username: localStorage.getItem('Name'),
                                        Balance: balance+ converting,
                                        email: localStorage.getItem('Email'),
                                        Purchases: userPurchases,
                                        Stocks: userStocks - converting,
                                        Profit: userProfits,
                                        Loss: userLosses,
                                        pfp: localStorage.getItem('PFP'),
                                        MathsLevel: userMathsLevel,
                                        CrypticLevel: userCrypticLevel,
                                        GeneralLevel: userGeneralLevel,
                                        QuizLevel: userQuizLevel,
                                    });
                                    notify4()
                                    getData()
                                }
                                else {
                                    notify3()
                                }
                            }}>CONVERT</button>
                            <h1 className="font-Bebas text-4xl text-white text-center my-6">MY STOCKS</h1>
                            <div className="">
                            <div className="dark-glassmorph text-white font-Bebas p-4 mx-auto w-8/12 my-5">
                                    <h1 className="text-4xl text-center">Total Stocks Bought</h1>
                                    <p className="text-white text-xl text-center m-2"><img src="./coin.gif" className="w-5 inline-flex"/> {userStocks}</p>
                                </div>
                                <div className="dark-glassmorph text-white font-Bebas p-4 mx-auto w-8/12 my-4">
                                    <h1 className="text-4xl text-center">Total Profit</h1>
                                    <p className="text-white text-xl text-center m-2"><img src="./coin.gif" className="w-5 inline-flex"/> {userProfits}</p>
                                </div>
                                <div className="dark-glassmorph text-white font-Bebas p-4 mx-auto w-8/12 my-4">
                                    <h1 className="text-4xl text-center">Total Loss</h1>
                                    <p className="text-white text-xl text-center m-2"><img src="./coin.gif" className="w-5 inline-flex"/> {userLosses}</p>
                                </div>
                            </div>
                </div>
                :
                <div className="font-Bungee text-center text-6xl">You need to login first.</div> 
                : 
                <div className="font-Bungee text-center text-6xl">You need to login first.</div>
            }
            <Footer />
        </div>
    )
}