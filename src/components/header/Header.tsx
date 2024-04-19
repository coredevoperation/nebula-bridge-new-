"use client"
import { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'

import { nebulaLogo } from '@/assets' 
import { ConnectedInfo, ConnectButton, Profile } from "@/components"
import MobileHeader from "./MobileHeader"
import { Menu, UserRound } from "lucide-react"
import styles from "@/styles/globalStyles.module.scss"

const linkStyles = 'py-[6px] px-[10px] transition-all lg:text-[16px] md:text-[16px] duration-500 rounded-tl-[10px] rounded-br-[10px] whitespace-nowrap font-medium'

const Header = () => {
     const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)
     const [openProfile, setOpenProfile] = useState<boolean>(false)
     const [showHeaderBg, setShowHeaderBg] = useState<boolean>(false)
     const path = usePathname();

     useEffect(() => {
         window.addEventListener("scroll", () => {
            if(window.scrollY >= 100) {
                setShowHeaderBg(true)
                return;
            }

            setShowHeaderBg(false);
        })

     }, [])


  return (
    <>
       {/* to make it animated, provide to types of header components */}
        <div className={`md:h-[100px] h-[60px] mx-auto border-box w-full sticky top-0 z-[4]`}>
            <header className={`h-full max-w-[100%] transition-all duration-[.3s] delay-300 ${showHeaderBg && styles.header_glassBg} md:border-b-[1px] md:border-b-[#D2ECFF]  font-orbitron text-[#fff] bg-cover`}>
                <nav className={`flex items-center h-full w-[90%] mx-auto xl:justify-around justify-between`}>
                    <aside className="flex items-center gap-[10px]">
                        <Image src={nebulaLogo} alt="nebula-logo" className="lg:h-[40px] lg:w-[40px] h-[35px] w-[35px]" />
                        <h2 className="lg:text-[30px] font-bold text-[20px]"> Nebula </h2>    
                    </aside>

                    <aside className="lg:flex hidden items-center gap-[30px]">
                        <ul className="flex items-center gap-[60px]">
                            <Link 
                                className={`${styles.header_link} ${linkStyles} ${path == "/stats" ? "bg-[#fff] text-[#100e0e]" : ""}`} href="/stats"> Stats </Link>
                            <Link 
                                className={`${styles.header_link} ${linkStyles} ${path == "/" ? "bg-[#fff] text-[#100e0e]" : ""}`} href="/"> Home </Link>
                            <Link 
                                className={`${styles.header_link} ${linkStyles}`} href="/mint"> Mint </Link>
                            <a 
                                className={`${styles.header_link} ${linkStyles}`} href="#" target='_blank'> Layer-Zero Scan </a>
                        </ul>

                        <div className="flex xl:flex-row lg:flex-col items-center xl:gap-[30px] lg:gap-[10px]">
                            <ConnectedInfo />
                            <ConnectButton 
                                styles={`text-[#fff] wallet_connect_btnTop px-[8px] font-normal tracking-[1px] bg-no-repeat bg-cover bg-center  ${styles.wallet_connectBtn_top_glass} `} />
                        </div>
                    </aside>

                    <div className="flex lg:hidden items-center gap-[10px]">
                        <UserRound onClick={() => setOpenProfile(true)} className={`bg-[#fff] ${styles.avatar_bg_glassGradient} w-[35px] rounded-[50%] p-[5px] border-[1px] h-[35px] cursor-pointer `} />
                        <Menu onClick={() => setOpenMobileMenu(true)} className={`w-[35px] h-[35px] cursor-pointer`} />
                    </div>
                </nav>
            </header>
        </div>


         <MobileHeader showMobileMenu={setOpenMobileMenu} isMobile={openMobileMenu} />
         <Profile showProfile={openProfile} setShowProfile={setOpenProfile} />
    </>
  )
}

export default Header