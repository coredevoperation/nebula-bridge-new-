"use client"
import { FC } from 'react'
import { IBridgeCard } from '@/types' 
import Image from "next/image"
import ConnectButton from '../connect-button/ConnectButton'
import { bsc } from '@/assets'
import { assets } from '@/constants'
import { ChevronDown } from "lucide-react"
import { Networks, TokenAssets } from "@/components" 
import styles from "@/styles/globalStyles.module.scss"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store/store"

const BridgeCard: FC<IBridgeCard> = ({ extraStyles, action, to, setNetwork, setAsset, showAssets, showNetworks }) => {
     const networkStates = useSelector((state: RootState) => state.network)


  return (
   <>
      <div className={`min-h-[250px] h-[250px] mt-[40px] w-full ${extraStyles ? extraStyles : ""}`}>
         <div className={`flex items-center md:w-[90%] w-[95%] md:mx-auto  justify-between xl:translate-y-[10px] lg:translate-y-[35px] md:translate-y-[35px] xs:translate-y-[-10px] s:translate-y-[15px] translate-y-[17px]`}>
               <p className='text-[#fff] font-bold lg:text-[18px] md:translate-y-[-5px] translate-y-[12px] xl:text-[22px]  text-[16px]'> { action } </p>
               <ConnectButton styles={`text-[#fff] xl:text-[18px] lg:text-[16px] text-center bridge_btn_clip xs:text-[14px] text-[12px] ${styles.wallet_connectBtn_glass} xs:min-w-[200px] min-w-[120px] md:translate-y-[-15px] translate-y-[7px]`} />
         </div>

         <div
         className="flex items-center justify-between w-full h-full border-box bg-contain bg-center overflow-hidden bridge_cardBg bg-no-repeat lg:p-[30px] p-[25px] md:translate-y-[0px] translate-y-[-30px]">
            
         {/* network box */}
            <div 
               className="flex flex-col w-[30%] sm:h-[60%] xs:h-[55%] h-[40%] xl:h-[70%] border-box cursor-pointer select_network_cardBg bg-no-repeat border-[1px] border-[#D2ECFF] rounded-[5px] bg-cover md:p-[15px] p-[10px] items-center border-box"
               onClick={() => {
                  setNetwork(true)
               }}
               >
               <span className="flex items-center lg:gap-[10px] gap-[-5px]">
                  <p className="text-[#fff] lg:text-[13px] md:text-[14px] font-semibold sm:text-[12px] xs:text-[14px] text-[8px] whitespace-nowrap"> Select Networks </p>
                  <ChevronDown className="text-[#fff] lg:w-[14px] w-[8px] lg:h-[14px] h-[8px] xs:w-[15px] xs:h-[15px]" />
               </span>
               <Image 
               src={bsc} 
               alt="network" 
               className="lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[70px] xs:w-[45px] xs:h-[45px] w-[45px] h-[45px]" />
            </div>


            <aside className="flex flex-col w-[60%] items-end gap-[20px]">
               <div
                     onClick={() => setAsset(true)} 
                     className='md:w-[170px] w-[fit-content] text-[#fff] input-glassBg cursor-pointer border-[1px] border-[#D2ECFF] md:translate-y-[10px] sm:translate-y-[-8px] xs:translate-y-[-10px] translate-y-[10px] '>
                     <article 
                           key={assets[0].id} 
                           className={`flex w-full bg-[#1b1c4d] p-[4px] justify-between items-center`} >
                              <div className="flex items-center gap-[4px]">
                                 <Image src={assets[0].Logo} alt="logo" className="sm:w-[25px] w-[15px] sm:h-[25px] h-[15px] xs:w-[20px] xs:h-[20px]" />
                                 <p className="sm:text-[14px] xs:text-[13px] text-[10px] font-semibold "> { assets[0].title } </p>  
                              </div>

                              <ChevronDown  className="sm:w-[14px] w-[10px] sm:h-[14px] h-[10px] xs:w-[13px] xs:h-[13px]" />
                     </article>
               </div>

               <div 
                  className="flex flex-col text-[#fff] lg:w-full w-full gap-[10px]">
                     <div 
                        className="amountBg flex items-center gap-[10px] w-full  h-[fit-content] lg:p-[15px] sm:p-[6px] p-[7px] bg-no-repeat bg-center bg-cover">
                           <h4 className="lg:text-[16px] xs:text-[14px] text-[10px]"> Amount </h4>
                           <input 
                              type="text"
                              placeholder='2000' 
                              className="border-none lg:text-[16px] xs:text-[14px] text-[10px] h-full bg-transparent rounded-[10px] focus:border-none focus:outline-none lg:w-[80%] w-[100%] p-[4px]" 
                           />
                     </div>

                     <div className="amountBg flex items-center gap-[10px] w-full lg:p-[15px] sm:p-[6px] p-[7px] h-[fit-content] bg-no-repeat bg-cover bg-center xs:translate-y-0 translate-y-[-10px]">
                           <h4 className="lg:text-[16px] xs:text-[14px] text-[10px]"> Balance </h4>
                           <p className="lg:text-[16px] xs:text-[14px] text-[10px]"> 2000 </p>
                     </div>
               </div>
               {/* balance */}

            </aside>
         </div>
      </div>
     
      <Networks { ...{ action, isTo: to, showNetworks, setNetwork } } />   
      <TokenAssets  { ...{ action, isTo: to, showAssets, setAsset } } /> 
   </>
  )
}

export default BridgeCard