"use client"

import { Phone, OpenArrow } from "./assets/icons/Icon";
import { About_section } from "./assets/section";

export default function Home() {
  return (
    <div className="">
      <div className="relative">
        <div className="h-[40rem] mb-4">
          <img className='absolute top-0 z-[-1] object-cover w-screen h-[40rem]' src='https://media.istockphoto.com/id/1618456217/photo/happy-asian-man-security-guard-and-tablet-for-surveillance-research-or-browsing-at-the-office.jpg?s=1024x1024&w=is&k=20&c=aQ5kycneYXR7xt3qSCl7ZjI4nO2oni_XBJJvMJoiMlY=' alt="" />
        </div>
        <div className="">
          <div className="absolute text-2xl font-bold  left-[55%] top-[13rem] text-slate-900">
            <h1 className='text-3xl font-bold text-green-700 mb-7'>PERFECT SECURITY SERVICE &#750;</h1>
            <p className="text-lg mb-7">is a private security services company. It is form with experts full of security experience and it provide security services nationwide in Myanmar.</p>
            <a href="#" className="flex items-center gap-2 px-4 pt-1 pb-2 text-xl text-white bg-green-700 rounded cursor-pointer w-fit">
              <Phone/>
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* about  */}
      <About_section/>
      
      {/* our service  */}
      <div className="container mx-auto mb-6">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="mb-6 text-4xl font-extrabold text-green-700">WE OFFER</h1>
            <h1 className="text-2xl font-extrabold">COMPREHENSIVE SECURITY SOLUTIONS, SERVICES & SUPPORT</h1>
          </div>
          <span className="text-[10rem] leading-[10rem] text-slate-400">&#750;</span>
        </div>
        <div className="text-lg leading-9 ms-[3rem] flex justify-between">
          <div className="">
            <a href="" className="block cursor-pointer hover:text-green-700">Restaurant Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">Recreation Centre Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">School Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">Construction Site Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">Office Building and Showroom Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">Shopping Centre Security Guards</a>
            <a href="" className="block cursor-pointer hover:text-green-700">Restaurant Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">Recreation Centre Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">School Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">Construction Site Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">Office Building and Showroom Security Service</a>
            <a href="" className="block cursor-pointer hover:text-green-700">Shopping Centre Security Guards</a>
          </div>
          <div className="w-[50%]">
            <div className="flex flex-col gap-3">
              <a href="" className="flex items-center gap-4 font-bold text-green-700">
                <OpenArrow/>
                <h1>Our Vision</h1>
              </a><hr />
              <a href="" className="flex items-center gap-4 font-bold text-green-700">
                <OpenArrow/>
                <h1>Core Values</h1>
              </a><hr />
              <a href="" className="flex items-center gap-4 font-bold text-green-700">
                <OpenArrow/>
                <h1>Our Core Duties</h1>
              </a><hr />
              <a href="" className="flex items-center gap-4 font-bold text-green-700">
                <OpenArrow/>
                <h1>Our Working Process</h1>
              </a><hr />
              <a href="" className="flex items-center gap-4 font-bold text-green-700">
                <OpenArrow/>
                <h1>Training of Security Guards</h1>
              </a><hr />
              <a href="" className="flex items-center gap-4 font-bold text-green-700">
                <OpenArrow/>
                <h1>Core Training Topics</h1>
              </a><hr />
              <a href="" className="flex items-center gap-4 font-bold text-green-700">
                <OpenArrow/>
                <h1>Quality Assurance</h1>
              </a><hr />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
