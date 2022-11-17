import { useEffect as UseEffect, useState as UseState } from "react"
import Link from 'next/link';
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Navbar({ title }){
    const [token, setToken] = UseState("")
    const router = useRouter();

    UseEffect(() => {
        setToken(localStorage.getItem('Token'))
    }, [])

    return(
        <div className="lg:flex justify-between lg:w-9/12 py-10 mx-auto font-Bebas lg:text-xl text-center lg:text-left">
            <Head>
                <title>{title} - SpyStop</title>
            </Head>
            <div className=""><p className="text-4xl font-semibold">SPYSTOP</p></div>
            <div>
                <ul className="flex justify-evenly">
                    <Link href={'/'}><li className={router.asPath === '/' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Home</li></Link>
                    <Link href={'/dashboard'}><li className={router.asPath === '/dashboard' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Dashboard</li></Link>
                    <Link href={'/store'}><li className={router.asPath === '/store' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Store</li></Link>
                    <Link href={'/stocks'}><li className={router.asPath === '/stocks' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Stocks</li></Link>
                    <Link href={'/gamebar'}><li className={router.asPath === '/gamebar' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Game Bar</li></Link>
                    <Link href={'/players'}><li className={router.asPath === '/players' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Players</li></Link>
                </ul>
            </div>
            <div className="">
            {token ? (<Link href={'/login'}><p className="bg-gradient-to-r pt-1 from-blue-500 to-pink-600 px-5 rounded-sm text-gray-200 w-fit mx-auto">{localStorage.getItem('Name')}</p></Link>) : (<Link href={'/login'}><p className="bg-gradient-to-r pt-1 from-blue-500 to-pink-600 px-5 rounded-sm text-gray-200 w-fit mx-auto">Login</p></Link>)}
            </div>
        </div>
    )
}