"use client"
import { 
    Dispatch, 
    SetStateAction, 
    useState,
     ReactElement,
     ChangeEvent
} from "react";
import styles from "@/styles/globalStyles.module.scss"

import NetworkLists from "./NetworkLists";
import { INetwork } from "@/types";
import { allNetworks } from "@/constants";
import { X, Search } from "lucide-react"


const Networks = ({ isTo, showNetworks, setNetwork }: { isTo: boolean, showNetworks: boolean, setNetwork: Dispatch<SetStateAction<boolean>> }) => {
        const [filteredNetworks, setfilteredNetworks] = useState<INetwork[]>([]);
        const [searchTerm, setSearchTerm] = useState("");

        /**
         * @dev handling network filter
         * @returns returning all filtered networks
         */
        const handleFilteredNetworks = (): ReactElement[] | undefined => {
             if(filteredNetworks?.length > 0) {
                return filteredNetworks.map(network => (
                    <NetworkLists key={network.id} { ...network } />
             ))
            }
            return allNetworks.map(network => (
                    <NetworkLists key={network.id} { ...network } />
                ))
        }


    return (
            <section 
                className={`${styles.networks_glassBg} fixed inset-0 z-[9] network_bg
                    bg-no-repeat h-full bg-cover w-full networks-gradient p-[10px] ${showNetworks ? "slide_down" : "slide_up"} transition-all delay-150 duration-[1s] `}
                >
                
                <div className="flex w-[90%] translate-y-[75px] justify-end">
                <X 
                    className="text-[#fff] cursor-pointer text-[35px] lg:w-[35px] lg:h-[35px] w-[25px] h-[25px]" onClick={() => setNetwork(false)} />
                </div>  


                <div className="lg:w-[40%] md:w-[60%] min-h-[60%] w-[80%] mx-auto box-border mt-[40px]">
                    <div className="text-center">
                    <h3 className="text-[18px] text-[#fff] mb-[20px]"> Sending {!isTo ? "From" : "To"}: </h3>
                    <p className="text-[#fff] mt-[-10px] text-[12px]">Select Network</p>
                    </div>

                    <div className={`flex items-center ${styles.input_network_glass} mt-[20px] lg:w-[80%] w-[70%] mx-auto justify-between rounded-tl-[15px] border-[2px] border-[#feffff] rounded-br-[15px] p-[8px] `}>
                    <input 
                        type="text"
                        className="py-[5px] text-[#fff] placeholder:text-[#fff] placeholder:text-[12px] lg:placeholder:text-[14px] px-[10px] border-none outline-none w-[95%] bg-transparent rounded-tl-[15px] rounded-br-[15px] tracking-[1.2px] placeholder:tracking-[1.2px] capitalize text-[12px] md:text-[16px] placeholder:italic md:placeholder:text-[16px] placeholder placeholder:font-medium italic font-medium" 
                        placeholder="search network"
                        value={searchTerm} 
                        onInput={(e: ChangeEvent<HTMLInputElement>) => {
                            const selectedNet = allNetworks.filter(network => network.name.toLowerCase().includes(e.target.value.toLowerCase()))
                            setSearchTerm(e.target.value)
                            setfilteredNetworks(selectedNet)
                            console.log(selectedNet)
                        }} 
                        
                        />
                        <Search className="text-[#c6c0c0]" />
                    </div>
                    <div className="p-[15px] flex h-[300px] network_list_scrollbar items-center justify-center gap-[20px] flex-wrap overflow-y-auto">
                        <>
                        { handleFilteredNetworks() }
                        </>
                    </div>
                </div>
            </section>
    )
}

export default Networks;