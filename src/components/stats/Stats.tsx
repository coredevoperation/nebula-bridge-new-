import React from 'react'
import LongCard from "./LongCard"
import TradeTxs from "./TradeTxs"
import RecentTxs from "./RecentTxs"

const Stats = () => {
  return (
    <div className="w-full mt-[50px] xs:mb-0 mb-[60px]">
        <LongCard />
         <div className="w-[90%] flex lg:flex-row flex-col gap-[30px] mt-[30px] mx-auto">
            <TradeTxs action="Hot Trade Pair" />
            <RecentTxs action="Recent Transactions" />
         </div>
    </div>
  )
}

export default Stats