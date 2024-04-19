"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { socials } from '@/constants'

const socialIconStyles = 'lg:w-[30px] lg:h-[30px] cursor-pointer'

const Socials = () => {
    const path = usePathname();

  return (
    <div className={`flex items-center flex-col ${path == "/stats" ? "translate-y-[1px]" : ""} justify-center gap-[30px] h-[140px] lg:mt-[90px] mt-[10px] xs:translate-y-0 translate-y-[-80px]`}>
         <Link href="/terms" 
          className={`text-[#fff] md:text-[16px] text-[16px] underline font-semibold ${path == "/terms" && "hidden"}`}> Terms & Conditions </Link> 

        <div className={`flex items-center sm:gap-[30px] gap-[15px] ${path == "/terms" ? "lg:translate-y-[-30px] translate-y-[70px]" : ""}`}>
           { socials.map(social => (
              <a key={social.id} href="#" className="cursor-pointer">
                 <Image src={social.logo} alt="social icon" className={`${socialIconStyles} w-[20px] h-[20px] `} />
              </a>
           )) }
        </div>
    </div>
  )
}

export default Socials