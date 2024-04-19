"use client"
import { Dispatch, SetStateAction, FC } from "react"
import { ConnectButton, ConnectedInfo } from "@/components"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import styles from "@/styles/globalStyles.module.scss"

type IProps = {
    isMobile: boolean;
    showMobileMenu: Dispatch<SetStateAction<boolean>>
}

const linkStyles = 'py-[3px] px-[6px] transition-all text-[18px] duration-500 rounded-tl-[10px] rounded-br-[10px] font-medium whitespace-nowrap min-w-[100px] border-box'

const MobileHeader: FC<IProps> = ({ isMobile, showMobileMenu }) => {
    const path = usePathname()

    const closeHeader = () => {
        showMobileMenu(false)
    }

    return (
        <div 
            className={`fixed z-[10] font-orbtiron ${isMobile ? "opacity-[1] visible translate-x-[-0px]" : "opacity-[0] invisible translate-x-[100px]"} transition-all delay-150 duration-[1s] w-full top-0 right-0 h-screen ${styles.mobile_glassBg} text-[#fff]`}>

            <aside className="w-[60%] float-right h-full flex flex-col items-center p-[15px] bg-[#10121B]">
                <div className="flex w-full justify-end">
                    <X onClick={closeHeader} className="font-bold" />
                </div>

                <div className="flex flex-col items-start min-[250px] gap-[30px]">
                    <ConnectedInfo />
                    <Link 
                        onClick={closeHeader} 
                        href="/stats" 
                        className={`${path == "/stats" ? "bg-[#fff] text-[#100e0e]" : ""} ${linkStyles}`}> Stats </Link>
                    <Link 
                        onClick={closeHeader} 
                        href="/" 
                        className={`${path == "/" ? "bg-[#fff] text-[#100e0e]" : ""} ${linkStyles}`}> Home </Link>
                    <Link 
                        onClick={closeHeader} 
                        href="#"
                        className={`${linkStyles}`}
                        > Mint 
                    </Link>
                    <a 
                        href="#" 
                        target='_blank'
                        className={`${linkStyles}`}
                        > Layer-Zero Scan </a>
                </div>

                <div className="flex justify-center h-[40px] mt-[40px]">
                    <ConnectButton styles={`w-[fit-content] w-[150px] h-[fit-content] bridge_btn_clip ${styles.wallet_connectBtn_top_glass}`} />
                </div>
            </aside>
        </div>
    )
}

export default MobileHeader;