"use client"
import {useState, useEffect} from 'react'
import { ConnectProps } from "@/types"
import type { RootState, AppDispatch } from '@/redux/store/store' 
import { connectWallet, disconnectWallet } from "@/redux/services/walletSlice"
// redux hooks
import { useSelector, useDispatch } from 'react-redux' 
import useNetwork from "@/custom-hooks/useNetwork"

const ConnectButton = ({ styles }: ConnectProps) => {
     const isConnected = useNetwork()
     const walletState = useSelector((state: RootState) => state.wallet)
     const [connectionState, setConnectionState] = useState("not-connected");
     const dispatch = useDispatch<AppDispatch>();

     const connectingWallet = async() => {
         try {
             if(!isConnected) {
               const userWallet = await dispatch(connectWallet("wallet_switchEthereumChain")) 
               localStorage.setItem("user-wallet", JSON.stringify({ connected: true, wallet: userWallet.payload as string }) );  
               console.log(walletState.user)
               window.location.reload();
              //  setConnectionState("connected")
             } 
         } catch(err) {
            console.log(err)
         }
     }

     const disconnectingWallet = async() => {
          if(isConnected) {
            await dispatch(disconnectWallet("wallet_revokePermissions"))
            localStorage.removeItem("user-wallet")
            window.location.reload();
          }
     }

  return (

    // ${!isConnected ? "opacity-[1] visible translate-y-[0px]" : "opacity-[0] invisible translate-y-[-100px]"}
    <button 
      onClick={!isConnected ? connectingWallet : disconnectingWallet}
      className={` ${styles} border-[1px] border-[#D2ECFF] transition-all duration-[0.7s] delay-200 rounded-br-[20px] rounded-tl-[20px] whitespace-nowrap bg-no-repeat bg-contain font-medium outline-none py-[4px] px-[12px]`}> 
        { isConnected ? "Disconnect" : "Connect Wallet" }
      </button>
  )
}

export default ConnectButton