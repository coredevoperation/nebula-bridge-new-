import { terms } from "@/constants"

const Terms = () => {

    return (
        <div className="w-full text-[#fff] mt-[30px]"> 
            <h2 className="underline font-bold lg:text-[20px] md:text-[18px] text-[16px]"> Terms & Conditions </h2> 
            <div className="mt-[20px] font-medium md:text-[16px] text-[14px]">
                <p className="">
                    Terms and Conditions <br />
                    General Site Usage <br />
                    Last revised: december 2013 <br />
                </p>
                <p className=""> Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully. </p>   
            </div>

            <aside className="flex flex-col mt-[10px] gap-[10px]">
                { terms.map(term => (
                    <div key={term.id}>
                        <h3 className="md:text-[16px] text-[14px] font-semibold"> {term.title} </h3>
                        <p className="md:text-[14px] text-[12px] font-medium"> {term.desc} </p>
                    </div>
                )) }
            </aside>
        </div>
    )
}

export default Terms;