"use client"

import { Phone, OpenArrow } from "./assets/icons/Icon";
import { ImageCard } from "./assets/components";
import { Content_form } from "./assets/section"

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
      <div className="container flex flex-col mt-[5rem] gap-[2rem] mx-auto text-slate-900">
        <h1 className="text-4xl font-bold ms-[4.8rem]">About Our Company <span className="text-green-700">&#750;</span></h1>
        <div className="flex items-center justify-around">
          <p className=" text-lg font-bold w-[50%] leading-8"><span className="text-green-700 ">PSS Myanmar Co.,Ltd</span> is a private security services company. It is form with experts full of security experience and it provide security services nationwide in Myanmar. PSS Myanmar Co.,Ltd was established in 2020 April 10th. This company is called “Perfect” because the name shows responsibility, trust, safety and perfect services that are the basic elements of security service. </p>
          <div className="">
            <img className=" w-[20rem] h-[15rem] rounded object-cover" src="https://media.istockphoto.com/id/1618820974/photo/happy-portrait-and-police-with-arms-crossed-in-the-city-for-security-safety-and-justice-on.jpg?s=1024x1024&w=is&k=20&c=YFDkHD4-b2NmKmrQKrAwlzl9_uVSkqZuaPMZjRn8FXI=" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-around">
          <div className="">
            <img className=" w-[20rem] h-[15rem] rounded object-cover" src="https://media.istockphoto.com/id/1592110171/photo/security-guard-safety-officer-and-man-with-walkie-talkie-on-street-for-protection-patrol-or.jpg?s=1024x1024&w=is&k=20&c=HLxZ-7Tecuhmbc8G_OP_uLE8KUQxVGOpIEK3U0AXK8g=" alt="" />
          </div>
          <p className=" text-lg font-bold w-[50%] leading-8">It is an organization that strives to protect the lives and property of those who rent. This company is the services provider company, so we are going to provide the services until the satisfaction of the clients and it is trying hard to ensure that there is no requirement in providing security services. </p>
        </div>

        {/* Gallery  */}
        <div className="my-8 ">
          <h1 className="text-4xl font-bold text-center">Gallery <span className="text-green-700">&#750;</span></h1>
          <p className="text-xl font-medium text-center">Image As Our Movement.</p>
          <div className="flex flex-wrap gap-4 mx-2 my-5">
            <ImageCard src='https://images.unsplash.com/photo-1581568736305-49a04e012c13?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <ImageCard src='https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VjdXJpdHklMjBndWFyZHxlbnwwfHwwfHx8MA%3D%3D'/>
            <ImageCard src='https://images.unsplash.com/photo-1587647069256-6ec77c96c2a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlY3VyaXR5JTIwZ3VhcmR8ZW58MHx8MHx8fDA%3D'/>
            <ImageCard src='https://images.unsplash.com/photo-1541214184964-d90ddf59c88b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNlY3VyaXR5JTIwZ3VhcmR8ZW58MHx8MHx8fDA%3D'/>
            <ImageCard src='https://media.istockphoto.com/id/1633957003/photo/security-guards-discussing-on-pitch.jpg?s=612x612&w=0&k=20&c=13gCpkfYSx_zftsvReFv5s4qxK-8eUrG5F-foQY07Oc='/>
          </div>
          <div className="flex justify-center">
            <a href="" className="text-lg border-b-2 border-green-700 cursor-pointer hover:text-green-700">See more</a>
          </div>
        </div>
      </div>
      {/* our service  */}
      <div className="mb-6 mx-auto container">
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

      {/* content  */}
      <div className="my-6 mx-auto container">
        <Content_form/>
      </div>
    </div>
  )
}
