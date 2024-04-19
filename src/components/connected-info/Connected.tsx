"use client"
import { useEffect, useState } from 'react'
import Image from "next/image"
import { metamaskIcon } from '@/assets'
import type { RootState, AppDispatch } from "@/redux/store/store"
import { useSelector, useDispatch } from "react-redux"
import { getNetworkData } from "@/helpers"

const Connected = () => {
    const walletState = useSelector((state: RootState) => state.wallet)
    const [userWallet, setUserWallet] = useState<string>('');
   
   useEffect(() => {
      const userData = getNetworkData()
      if(userData) {
        setUserWallet(userData.wallet)
      }
   }, [userWallet])


  return (
    <div className="flex min-w-[150px] items-center justify-center gap-[5px] border-[1.5px] border-[#D2ECFF] rounded-[20px] py-[4px] px-[14px]">
        <Image src={metamaskIcon} alt="metamask icon" className="w-[20px] h-[20px]" />
        <p className="font-medium lg:text-[16px]"> { userWallet && `${userWallet.substring(0, 5)}...${userWallet.substring(userWallet.length, userWallet.length - 5)}` || "Guest" } </p>
    </div>
  )
}

export default Connected