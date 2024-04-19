import Image from "next/image"
import { FC, useState } from 'react'
import { INetwork } from "@/types"
import { bsc } from "@/assets";
import type { AppDispatch } from "@/redux/store/store"
import { useDispatch } from "react-redux"
import { getSelectedNetwork } from "@/redux/services/networkSlice"

const NetworkLists: FC<INetwork> = (network) => {
    const dispatch = useDispatch<AppDispatch>()
    const [selectedNetwork, setSelectedNetwork] = useState<INetwork>({ 
            id: 0, 
            name: '', 
            chainId: 0, 
            logo: bsc  
    });

    const handleSelectedNetwork = (networkDetail: INetwork) => {
        console.log(networkDetail.chainId)
        dispatch(getSelectedNetwork({ chainId: String(networkDetail.chainId), name: networkDetail.name }))
    }

  return (
     <div 
        data-testid="network"
        key={network.id}
        onClick={() => handleSelectedNetwork(network)}
        className="flex w-[130px] lg:h-[100px] h-[fit-content] flex-col items-center cursor-pointer transition-opacity duration-[.4s] rounded-[10px] hover:border-[1px] lg:p-[15px] p-[5px] hover:opacity-[0.8] hover:bg-[#c8bbbb]"
        >
        <Image 
            src={network.logo} 
            className="xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] w-[35px] h-[35px] rounded-[50%]" 
            alt="network-logo"
        />
        <h2 className="text-[#fff] xl:text-[18px]  md:text-[14px] text-[12px]"> { network.name } </h2>
    </div>
  )
}

export default NetworkLists