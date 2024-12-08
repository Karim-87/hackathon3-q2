import Link from "next/link"
export default function AboutHero() {
    return(
        <div>
            <div className="flex sm:flex-col lg:flex-row lg:w-[1440px] lg:h-[277px] lg:gap-[232px] p-[73px]">
             <div className="w-full h-full lg:w-[704px] lg:h-[100px] text-[36px]"><h1>A brand built on the love of craftmanship, quality and outstanding customer service</h1></div>
             <Link href="/productListing">
             <button className="w-[192px] h-[56px] pt-4 pb-4 pr-8 pl-8 gap-[10px] bg-[#F9F9F9] shadow-md">View products</button></Link>


            </div>



        </div>
    )
}