"use client"

import { Nav, Footer } from '../assets/components';
import { Content_form } from '../assets/section';
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
                <div className={`${!navShow && '-translate-y-[70px]'} ${prevScroll === 0 ? "bg-transparent text-green-500" : 'bg-green-500 text-white'} duration-300 transform transition delay-150 ease-linear fixed z-50 w-screen px-6 pb-3`}>
                    <Nav/>
                </div>
            </header>
            <main>
                <div className="">
                    { children }
                    {/* content  */}
                    <div className="container mx-auto my-6">
                        <Content_form/>
                    </div>
                </div>
            </main>
            <footer className=''>
                <div className=''>
                    <Footer/>
                </div>
            </footer>
        </>
    )
}
