"use client"

import { Nav, Footer } from '../assets/components';
import { useEffect, useState } from 'react';
export default function AppLayout({children}) {

    
    const [prevScroll, setPreScroll] = useState( typeof windiow != "undefined" ? window.pageYOffset : "");
    const [navShow, setNavShow] = useState(true);

    const handelScroll = () => {
        let currentScroll = window.pageYOffset;
        if (prevScroll > currentScroll) {
            setNavShow(true);
        } else {
            setNavShow(false);
        }
        setPreScroll(currentScroll);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll);
        }
    },[prevScroll]);

  return (
        <>
            <header className=''>
                <div className={`${!navShow && '-translate-y-[70px]'} ${prevScroll === 0 ? "bg-transparent" : 'bg-green-500'} duration-300 transform transition delay-150 ease-linear fixed z-50 w-screen px-6 pb-3`}>
                    <Nav/>
                </div>
            </header>
            <main>
                <div className="">
                    { children }
                </div>
            </main>
            <footer className=''>
                <Footer/>
            </footer>
        </>
    )
}
