import Image from "next/image";
import Link from "next/link";
import { BiFullscreen } from "react-icons/bi";

export default function HeroSection() {
    return (
        <div className="relative w-full lg:h-[704px] flex flex-col lg:flex-row lg:justify-end lg:items-center">
            {/* Background Image for Large Screens */}
            <Image
                src="/Hero Blocks1.jpg"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                priority
                className="hidden lg:block -z-10"
            />

            {/* Content Section */}
            <div className="relative w-full lg:w-[630px] lg:h-[444px] bg-white mx-auto lg:mr-32 p-10 lg:p-20 space-y-6 shadow-lg">
                {/* Display Image for Mobile */}
                <div className="block lg:hidden mb-6">
                    <Image
                        src="/Hero Blocks1.jpg"
                        alt="Hero Mobile Background"
                        width="600"
                        height="400"
                        objectFit="cover"
                        priority
                    
                        className="w-full h-auto"
                    />
                </div>

                {/* Heading */}
                <div>
                    <h2 className="text-[24px] lg:text-[32px] text-[#22202E] leading-tight">
                        Luxury homeware for people who love timeless design quality
                    </h2>
                </div>

                {/* Subheading */}
                <div className="text-[16px] lg:text-[18px] text-[#5B5676] font-sans">
                    Shop the new Spring 2022 collection today
                </div>

                {/* Button */}
                <div>
                <Link href="/ProductPage">
                    <button className="mt-6 lg:mt-10 w-full lg:w-[200px] h-[48px] lg:h-[56px] bg-[#F9F9F9] text-[16px] text-[#22202E] py-2 lg:py-4 px-6 lg:px-8 rounded hover:bg-gray-200 transition">
                        View collection
                    </button> </Link>
                </div>
            </div>
        </div>
    );
}
