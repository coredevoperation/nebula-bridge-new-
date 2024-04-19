"use client"
import { useState, useEffect } from 'react'
import { getNetworkData } from "@/helpers"

const useNetwork = () => {
     const [isConnected, setIsConnected] = useState<boolean>(false) 

     useEffect(() => {
        const networkData = getNetworkData();
        if(networkData) {
           setIsConnected(networkData.connected)
        }
     }, [])

    return isConnected
}

export default useNetwork