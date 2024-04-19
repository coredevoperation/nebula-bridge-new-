import {FC} from 'react'
import styles from "@/styles/globalStyles.module.scss"
import { LucideIcon } from 'lucide-react'

interface IProps {
    Icon: LucideIcon;
    title: string;
    value: string;
    isWithIcon: boolean;
    extraStyles?: string;
}

const LongCardInfo: FC<IProps> = ({ Icon, title, value, isWithIcon, extraStyles }) => {
  return (
        <div className={`${extraStyles ? extraStyles : ""}`}>
            <p className={`font-normal lg:text-[16px] md:text-[14px] text-[12px] whitespace-nowrap`}> {title}: </p>
            <h3 className={`font-semibold lg:text-[16px] md:text-[14px] text-[12px] ${isWithIcon && "flex items-center gap-[10px]"}`}> 
                { value } { isWithIcon && <Icon className={`sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px] rounded-[5px] px-[2px] py-[1.5px] bg-[#293140] w-[12px] h-[12px]`} /> } 
            </h3>
        </div>
  )
}

export default LongCardInfo