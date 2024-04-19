"use client"
import React, { Dispatch, SetStateAction } from 'react'
import Image from "next/image"
import { Copy, X } from 'lucide-react' 
import { metamaskIcon } from '@/assets' 
import { quests } from "@/constants"

import styles from "@/styles/globalStyles.module.scss"

const Profile = ({showProfile, setShowProfile}: { showProfile: boolean, setShowProfile:  Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className={`fixed lg:hidden z-[11] w-full ${showProfile ? "quest_slide_up" : "quest_slide_down"} transition-all delay-200 duration-[1s] p-[25px] h-screen top-0 bg-[#10121B] text-[#fff]`}>
        {/* USER WALLET & NETWORK */}
        <div className="w-full mx-auto flex items-center justify-between">
            <div className="flex gap-[15px] items-center w-[50%]">
                <Image src={metamaskIcon} alt="metamask icon" className="w-[35px] h-[35px]" />
                <div className="">
                    <h4 className="flex gap-[2px] text-[16px] font-semibold"> wallet <sup className="translate-y-[8px]"> <Copy className="w-[15px] h-[15px] cursor-pointer" /> </sup> </h4>
                    <p className="text-[12px] font-medium"> Arbitrum </p>
                </div>
            </div>

            <X className="w-[35px] h-[35px]" onClick={() => setShowProfile(false)} />
        </div>

        {/* POINTS AND STUFF */}
        <div className="w-full mx-auto profile_card_gradient mt-[25px] flex flex-col gap-[5px] py-[6px] px-[10px] border-[1px] border-[#fff] rounded-[10px]">
            <h3 className="text-[18px] font-semibold"> Your points </h3>
            <h4 className="text-[22px] font-bold font-orbitron"> <strong> 0 XP </strong> </h4>
            <p> Balance: <span> ***** </span> </p>
            <p> Total Tx: <span> ***** </span> </p>
        </div>

        {/* QUESTS */}
        <div className={`w-full h-[60%] mb-[35px] flex-col mx-auto mt-[30px] p-[10px] rounded-[10px] border-[1px] border-[#fff] flex quests overflow-y-auto ${styles.profile_quest_glass}`}>
            <h3 className="font-semibold"> Quests: </h3>
            <div className="w-full flex flex-col gap-[20px] mt-[10px] transition-all duration-[2s] overflow-y-auto">
                {/* QUESTS ITEMS */}
                { quests.map(quest => (
                    <div key={quest.id} className={`w-full flex gap-[15px] border-[1px] border-[#fff] rounded-[10px] p-[8px] items-center justify-between ${styles.profile_quest_glass}`}>
                        <aside className="flex flex-col items-center profile_points_box text-[#000] font-bold py-[10px] px-[10px] rounded-[10px] border-[1px] border-[#000000]">
                            <h2 className="text-[22px] font-orbitron"> <strong> { quest.numOfQuest } </strong> </h2>
                            <p className="whitespace-nowrap text-[12px]"> 0-points </p>
                        </aside>

                        <aside className='flex flex-col gap-[10px]'>
                            <h4 className="text-[12px] font-semibold"> {quest.title} </h4>
                            <div className="flex w-full items-center justify-between box-border gap-[10px]">
                                <p className="text-[10px] font-semibold bg-[#6F001A] py-[3px] px-[8px] rounded-tl-[20px] whitespace-nowrap rounded-br-[20px]"> {quest.subtitle} </p>
                                <p className="text-[10px] min-w-[40px] text-center font-bold w-[fit-content] text-[#000] bg-[#D2ECFF] py-[1px] px-[3px] rounded-tl-[20px] rounded-br-[20px] translate-y-[-3px]"> {quest.numOfCompleted}/{quest.totalOfTasks} </p>
                            </div>
                        </aside>
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Profile