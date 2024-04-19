import {Dispatch, SetStateAction} from 'react'
import { nebulaLogo } from "@/assets"
import { Search, X } from "lucide-react"
import Image from "next/image"
import styles from "@/styles/globalStyles.module.scss"
import { tokenAssets } from '@/constants' 

const TokenAssets = ({ isTo, showAssets, setAsset }: {isTo: boolean, showAssets: boolean, setAsset: Dispatch<SetStateAction<boolean>> }) => {

  return (
    <div className={`fixed inset-0 ${styles.assets_glassBg} z-[9] w-full ${showAssets ? "opacity-[1] visible translate-y-[0px]" : "opacity-0 invisible translate-y-[-200px]"} transition-all delay-150 duration-[1s] text-[#fff] main_bg bg-no-repeat bg-cover`}>

        {/* TITLE AND LOGO */}
        <aside className="w-[80%] mx-auto flex items-center mt-[30px] gap-[10px]">
            <Image src={nebulaLogo} alt="nebula-logo" className="lg:h-[40px] lg:w-[40px] h-[35px] w-[35px]" />
            <h2 className="md:text-[35px] text-[20px]"> Nebula </h2>    
        </aside>
        
        {/* bg-[#231E3B] */}
        <article className="lg:w-[35%] md:w-[50%] sm:w-[60%] bg-[#231E3B] lg:translate-y-0 translate-y-[60px] w-[80%] h-[60%] mx-auto mt-[30px] rounded-[10px] flex flex-col justify-center">
          <header className="w-full h-[20%] bg-[#0A0913] opacity-[0.8] flex items-center gap-[30px] justify-end p-[6px]">
              <h4 className="md:text-[16px] lg:translate-x-[-110px] translate-x-[-70px] text-[14px]"> Search Assets </h4>
              <X className="w-[25px] h-[25px] cursor-pointer" onClick={() => setAsset(false)} />
          </header>

         {/* INPUT */}
          <div className="h-auto max-h-[80%] w-full assets overflow-y-auto">
              <div className="bg-[#231E3B] py-[5px] px-[20px] w-full sticky z-[2] top-[-10px]">
                  <div className={`flex items-center ${styles.input_glassBg} mt-[20px] w-full justify-between border-[2px] border-[#fff] px-[4px] rounded-[6px]`}>
                    <input 
                        type="text"
                        className="py-[5px] px-[10px] border-none outline-none w-[90%] placeholder:text-[12px] text-[12px] md:placeholder:text-[14px] md:text-[14px] bg-transparent rounded-tl-[15px] rounded-br-[15px] tracking-[1.2px] placeholder:tracking-[1.2px]" 
                        placeholder="search assets token name or address"
                        // value={searchTerm} 
                        // onInput={(e: ChangeEvent<HTMLInputElement>) => {
                        //     const selectedNet = allNetworks.filter(network => network.name.toLowerCase().includes(e.target.value.toLowerCase()))
                        //     setSearchTerm(e.target.value)
                        //     setfilteredNetworks(selectedNet)
                        //     console.log(selectedNet)
                        // }} 
                        
                        />
                      <Search className="text-[#c6c0c0] w-[15px] h-[15px]" />
                  </div>

                  <div className="w-full mt-[5px] flex items-center justify-between">
                      <h4 className="md:text-[16px] text-[14px]"> Assets </h4>
                      <h4 className="md:text-[16px] text-[14px]"> Balance </h4>
                  </div>
              </div>

                 {/* ASSETS Container */}
              <div className="w-full h-auto py-[5px] px-[20px]">
                
                   {/* ASSET LISTS */}
                  <div 
                    className='w-full flex flex-col gap-[10px] items-center mt-[8px] overflow-y-auto'>
                    { tokenAssets.map(asset => (
                        <div 
                          key={asset.id} 
                          className='w-full flex items-center justify-between rounded-[10px] py-[6px] px-[10px] border-[1px] border-[#fff]'>
                          <aside className='flex items-center gap-[8px]'>
                              <Image 
                                src={asset.Icon} 
                                alt="icon of asset" 
                                className='lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px] w-[20px] h-[20px]' 
                               />
                              <p className="md:text-[16px] text-[14px]"> { asset.title } </p>
                            </aside> 

                            <p className="md:text-[16px] text-[14px]"> {asset.balance} </p>
                        </div>
                    )) }
                  </div>
              </div>
          </div>
        </article>

    </div>
  )
}

export default TokenAssets