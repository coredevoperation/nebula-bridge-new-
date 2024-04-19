"use client"
import { useEffect, useRef, useState } from 'react'
import { usePathname } from "next/navigation"
import { terms } from "@/constants"
import styles from "@/styles/globalStyles.module.scss"

const TermsPopup = () => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [showPopup, setShowPopup] = useState<boolean>(false)
    const path = usePathname();

   useEffect(() => {
      
     setTimeout(() => {
       setShowPopup(true)
     }, 3000)

  }, [])

  return ( 
    <div 
      ref={popupRef} 
      className={`fixed z-[9] transition-all delay-300 duration-[1.5s] block ${path == "/terms" && "hidden"} ${showPopup ? "opacity-[1] visible scale-[1]" : "opacity-0 scale-[0] invisible"}  inset-0 w-full ${styles.term_popup_glassBg} terms_showUp`}
    
      >
       <div className="sm:w-[70%] w-[80%] h-[70%] mt-[100px] text-[#fff] flex flex-col justify-center items-center term_popup_bg bg-cover bg-center bg-no-repeat min-h-[400px]] mx-auto">
          <div className="h-[90%] max-h-[100%] w-[90%] inner_popup_bg p-[10px] overflow-y-auto inner_popup">

            <div className="mt-[10px] md:text-[16px] text-[14px]">
                <p className="md:text-[14px] text-[12px]">
                    Terms and Conditions <br />
                    General Site Usage <br />
                    Last revised: december 2013 <br />
                </p>
                <p className="md:text-[14px] text-[12px]"> Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully. </p>   
            </div>

            <aside className="flex flex-col mt-[10px] gap-[10px] md:text-[14px] text-[12px]">
                { terms.map(term => (
                    <div key={term.id}>
                        <h3 className="font-semibold"> {term.title} </h3>
                        <p className="font-medium"> {term.desc} </p>
                    </div>
                )) }
            </aside>

            <div className="flex w-[90%] justify-end mt-[20px]">
                <button 
                  onClick={() => {
                       if(popupRef.current) {
                          popupRef.current.style.display = "none";
                        }
                  }}
                  className={`border-[2px] min-w-[fit-content] w-[150px] border-[#D2ECFF] rounded-tl-[20px] rounded-br-[20px] lg:text-[18px] font-medium text-[12px] md:text-[16px outline-none whitespace-nowrap py-[4px] px-[8px] ${styles.term_close_btn_glass}`}>     Accept & Continue 
                </button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default TermsPopup
