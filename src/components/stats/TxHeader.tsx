import {FC} from 'react'
import { TxHeaderType } from "@/types"

const TxHeader: FC<TxHeaderType> = ({ headers, sliceFrom, sliceTo, styles }) => {
  return (
    <div className={`w-full ${styles}
bg-[#151e45] py-[10px] sticky top-0 z-[9] flex items-center second-trade-header h-[50px]`}>
        { headers.slice(sliceFrom, sliceTo).map(header => (
            <h3 className="md:text-[14px] font-semibold text-[12px]" key={header.id}> { header.title } </h3>
        )) }
    </div>
  )
}

export default TxHeader