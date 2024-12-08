import Link from "next/link"
export default function ListingCollection() {
return (
        <div className="justify-items-center mt-32 mb-20">
            <div className="w-full h-full lg:w-[1140px] lg:h-[634px] justify-items-center bg-[#ffffff]">
                <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                    <div className="w-[305px] h-[462px] gap-[24px] shadow-md hover:scale-110 cursor-pointer"><img src="list image 1.png" alt="list image 1" /><div className="w-[154px] h-[63px] mt-8"><h4>The Dandy chair</h4><p>£250</p></div></div>
                    <div className="w-[305px] h-[462px] gap-[24px] shadow-md hover:scale-110 cursor-pointer"><img src="list image 2.png" alt="list image 1" /><div className="w-[154px] h-[63px] mt-8"><h4>Rustic Vase Set</h4><p>£155</p></div></div>
                    <div className="w-[305px] h-[462px] gap-[24px] shadow-md hover:scale-110 cursor-pointer"><img src="list image 3.png" alt="list image 1" /><div className="w-[154px] h-[63px] mt-8"><h4>The Silky Vase</h4><p>£125</p></div></div>
                    <div className="w-[305px] h-[462px] gap-[24px] shadow-md hover:scale-110 cursor-pointer"><img src="list image 4.png" alt="list image 1" /><div className="w-[154px] h-[63px] mt-8"><h4>The Lucy Lamp</h4><p>£399</p></div></div>
                </div>

                <div><Link href="/productListing"><button className="mt-20 w-[200px] h-[56px] pt-4 pb-4 pl-8 pr-8 gap-[10px] bg-[#f9f9f9eb] shadow-md text-[16px] ">View Collection</button></Link></div>


            </div>
        </div>
    )
};