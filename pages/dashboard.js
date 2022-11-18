/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Footer from "../components/Footer";
import CoinsGraph from "../components/charts/CoinsGraph";

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
    labels: ["26 Oct", "27 Oct" ,"28 Oct", "29 Oct", "30 Oct", "31 Oct", "01 Nov", "02 Nov", "03 Nov", "04 Nov", "05 Nov", "06 Nov", "07 Nov", "08 Nov", "09 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov"],
    datasets: [
        {
        label: "Price per unit",
        data: [902, 420, 780, 1004, 2045, 3400, 4560, 2313, 5343, 211, 543, 85, 843, 903, 356, 1245, 3436, 4657, 6788, 3464, 3756, 2353, 3643, 6436, 3675],
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
    const [userBalance, setUserbalance] = useState(0)
    const [userPurchases, setUserPurchases] = useState()
    const [userProfits, setUserProfits] = useState()
    const [userLosses, setUserLosses] = useState()

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                if(data.data().email === localStorage.getItem('Email')){
                    setUserbalance(data.data().Balance)
                    setUserPurchases(data.data().Purchases)
                    setUserProfits(data.data().Profit)
                    setUserLosses(data.data().Loss)
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

    

    return(
        <div className="">
            <Navbar title="Dashboard" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            {
                mounted ? 
                token ? 
                <div className="lg:flex font-Inter text-gray-100 mx-12">
                    <div className="dark-glassmorph lg:w-[29%] py-5 pl-5 rounded-lg">
                        <div className="lg:flex">
                            <img src={localStorage.getItem('PFP')} className="w-28 mx-auto lg:mx-0 rounded-full lg:rounded-lg"/>
                            <div className="lg:px-5 px-2">
                                {localStorage.getItem('Name')}
                                <br></br>
                                <p>{localStorage.getItem('Email')}</p>
                                Balance: <img src="./coin.gif" className="w-5 inline-flex"/> {userBalance}</div>
                        </div>
                        <div className="pt-10">
                            <p className="text-center font-Bebas text-3xl mb-3">Purchases</p>
                            <div className="lg:h-[300px] lg:overflow-y-scroll purchases overflow-x-hidden" id="style3">
                                {
                                    userPurchases.map((data) => {
                                        return(
                                        <div className="flex py-2" key={data.price}>
                                            <img src={data.image} className="w-16 h-12 rounded-sm" />
                                            <div className="px-2">
                                                <p>{data.item}</p>
                                                <p>Bought for: <img src="./coin.gif" className="w-5 inline-flex"/> {data.price}</p>
                                            </div>
                                        </div>
                                    )})
                                }
                            </div>
                        </div>
                    </div>
                    <div className="dark-glassmorph my-4 lg:w-[29%] py-5 pl-5 rounded-lg md:ml-14">
                    <p className="text-center font-Bebas text-4xl py-2">Stocks!</p>
                        <Line data={data}/>
                        <div className="pt-10">
                            <p className="text-center font-Bebas text-3xl mb-3">Real Time <span className="text-green-600">Profit</span></p>
                            <div className="lg:h-[50px] lg:overflow-y-scroll purchases overflow-x-hidden" id="style3">
                                <h1 className="font-Bebas text-2xl text-center"><img src="./coin.gif" className="w-5 inline-flex"/> {userProfits}</h1>
                            </div>
                        </div>
                        <div className="pt-4">
                            <p className="text-center font-Bebas text-3xl mb-3">Real Time <span className="text-red-600">Loss</span></p>
                            <div className="lg:h-[50px] lg:overflow-y-scroll purchases overflow-x-hidden" id="style3">
                                <h1 className="font-Bebas text-2xl text-center"><img src="./coin.gif" className="w-5 inline-flex"/> {userLosses}</h1>
                            </div>
                        </div>
                    </div>
                        <CoinsGraph />
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