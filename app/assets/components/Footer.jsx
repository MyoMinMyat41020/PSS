"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {

    const pathname = usePathname();
    
    return (
        <div className='text-white bg-green-500'>
            <div className='container flex flex-col gap-[2rem] mx-auto py-[3rem]'>
                <h1 className='mb-1 text-3xl font-bold text-green-900'>PERFECT SECURITY SERVICE &#750;</h1>
                <div className='grid grid-cols-2 gap-2 '>
                    <div>
                        <p className="w-3/4 mb-7">is a private security services company. It is form with experts full of security experience and it provide security services nationwide in Myanmar.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-8 font-semibold'>
                        <div>
                            <h1 className='text-lg font-bold '>Download Links</h1>
                            <div className=' ps-7'>
                                <div>
                                    <a href='' className=" hover:text-green-700">Download Pan & Marketing</a>
                                </div>
                                <div>
                                    <a href="" className=" hover:text-green-700">Download Contract</a>
                                </div>
                            </div>
                        </div>
                        <div className='text-lg font-semibold'>
                            <h1>Navigation Menu</h1>
                            <div>
                                <ul className="items-center justify-center gap-4 ps-4">
                                    <li>
                                        <Link href="/" className={`${ pathname == "/" ? " text-green-700 " : "hover:text-green-700"}`}>Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/pssservices" className={`${ pathname == "/pssservices" ? " text-green-700 " : "hover:text-green-700"}`}>Our Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/project" className={`${ pathname == "/project" ? " text-green-700 " : "hover:text-green-700"}`}>Our Projects</Link>
                                    </li>
                                    <li>
                                        <Link href="/gallery" className={`${ pathname == "/gallery" ? " text-green-700 " : "hover:text-green-700"}`}>Gallery</Link>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }