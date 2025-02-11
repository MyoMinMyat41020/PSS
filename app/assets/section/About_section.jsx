"use client"

import { ImageCard } from "../components"

export default function Service () {
    return (
        <div className="container py-[8rem] mx-auto text-slate-900">
            <div className="flex justify-center w-full lg:justify-start">
                <h1 className="text-4xl font-bold">About Our Company <span className="text-green-700">&#750;</span></h1>
            </div>
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
        </div>
    )
}