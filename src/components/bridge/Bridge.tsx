"use client"
import { useState, useEffect } from 'react'
import { Networks, BridgeCard, TokenAssets } from "@/components"
import { routing } from "@/assets"
import Image from "next/image"
 
const Bridge = () => {
      const [showNetworks, setShowNetworks] = useState<boolean>(false);
      const [showAssets, setShowAssets] = useState<boolean>(false);

  return (
    <>
      <div className="lg:w-[38%] md:w-[65%] sm:w-[80%] w-[95%] mx-auto flex flex-col gap-[10px] items-center">
        <BridgeCard { ... { extraStyles: "translate-y-[50px]", action: "from", to: false, showNetworks, showAssets, setNetwork: setShowNetworks, setAsset: setShowAssets } } />
          <Image src={routing} alt="routing icon" className="lg:w-[45px] lg:h-[45px] w-[35px] h-[35px] md:translate-y-[80px]  lg:translate-y-[70px] xs:translate-y-[35px] xl:translate-y-[90px] translate-y-[-8px]" />
        <BridgeCard { ... { extraStyles: "xl:translate-y-[20px] xs:translate-y-0 translate-y-[-95px]", action: "To", to: true,  showNetworks, showAssets, setNetwork: setShowNetworks, setAsset: setShowAssets } } />
      </div>

        {/* <Networks { ...{ showNetworks, setNetwork: setShowNetworks } } />   
       <TokenAssets  { ...{ showAssets, setAsset: setShowAssets } } />  */}
    </>
  )
}

export default Bridge