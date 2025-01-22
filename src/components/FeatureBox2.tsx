import Link from "next/link";

export default function FeatureBox2() {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col lg:flex-row w-full max-w-[1440px] lg:h-[598px] p-6 lg:p-16 gap-6">
                {/* Left Section */}
                <div className="flex flex-col justify-between w-full lg:w-[630px] bg-[#2A254B] p-8 lg:p-16 text-white">
                    <div>
                        <h2 className="text-[24px] lg:text-[32px] font-bold leading-tight">
                            It started with a small idea
                        </h2>
                    </div>
                    <div className="mt-4 text-[16px] lg:text-[18px]">
                        A global brand with local beginnings, our story began in a small studio in South London in early 2014.
                    </div>
                    <div className="mt-6 lg:mt-12">
                       <Link href="/ProdutPage"> <button className="w-full lg:w-[200px] h-[48px] lg:h-[56px] bg-[#F9F9F926] text-[16px] py-2 lg:py-4 px-6 lg:px-8 rounded hover:bg-gray-200 transition">
                            View collection
                        </button></Link>
                    </div>
                </div>
                {/* Right Section */}
                <div className="w-full lg:w-[630px]">
                    <img 
                        src="Image Block 2.png" 
                        alt="image block 2" 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
        </div>
    );
}
