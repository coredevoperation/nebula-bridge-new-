import React from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import styles from "@/styles/globalStyles.module.scss"
import LongCardInfo from "./LongCardInfo"


const LongCard = () => {
  return (
    <div className={`text-[#fff] ${styles.stats_longCard_glass} w-[90%] flex flex-col justify-center  mx-auto min-h-[200px] border-[2px] border-[#D2ECFF] rounded-[5px] md:p-[35px] p-[20px]`}>
        <h2 className="md:text-[24px] text-[16px] font-bold"> Overall Status </h2>

        <aside className="w-full lg:w-full md:w-[90%] flex sm:flex-row flex-col justify-between md:gap-[10px] gap-[20px] mt-[20px] h-full">
            {/* LEFT INFO */}
            <div className="flex flex-col md:w-[40%] w-full h-full min-h-[100px] gap-[30px]">
                <article className="flex w-full items-center gap-[20px] justify-between">
                    <LongCardInfo { ...{ title: "Aggregated TVL", isWithIcon: false, Icon: ChevronDown, value: "$5.16B" } } />
                    <LongCardInfo { ...{ title: "Aggregated Bridge", isWithIcon: true, Icon: ChevronDown, value: "7", extraStyles: "translate-x-[-15px]" } } />
                </article>

                <article className="flex w-full items-center gap-[20px] justify-between">
                     <LongCardInfo { ...{ title: "Supported Chains", isWithIcon: true, Icon: ChevronDown, value: "20" } } />
                     <LongCardInfo { ...{ title: "Supported Tokens", isWithIcon: false, Icon: ChevronDown, value: "28.669", extraStyles: "translate-x-[-17px]" } } />
                </article>
            </div>

            {/* RIGHT INFO */}
             <div className="flex flex-col items-start md:w-[40%] w-full h-full min-h-[100px] gap-[30px] ">
                <article className="flex w-full items-center gap-[20px] justify-between">
                    <LongCardInfo { ...{ title: "Aggregated Dex", isWithIcon: true, Icon: ChevronDown, value: "26" } } />
                    <LongCardInfo { ...{ title: "Community Members", isWithIcon: true, Icon: ExternalLink, value: "20" } } />
                    
                </article>

                <article className="flex w-full items-center gap-[20px] justify-between">
                    <LongCardInfo { ...{ title: "Total Transactions", isWithIcon: false, Icon: ExternalLink, value: "20,000,000" } } />
                    <LongCardInfo { ...{ title: "Total Trade Volume", isWithIcon: false, Icon: ExternalLink, value: "$28.669.000", extraStyles: "translate-x-[-15px]" } } />
                   
                </article>
            </div>
        </aside>
    </div>
  )
}

export default LongCard