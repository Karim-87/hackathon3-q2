import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BiWallet } from "react-icons/bi";
import { LuSprout } from "react-icons/lu";


export default function FeatureBox() {
  return (
    <div className="mt-10 mb-10">
      <div className="max-w-[1440px] mx-auto bg-[#ffffff]">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-[24px] text-[#2A254B]">What makes our brand different</h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-20">
          {/* Card 1 */}
          <div className="bg-[#f9f9f9] p-8 rounded-lg shadow-md ">
            <TbTruckDelivery className="h-[24px] w-[24px] text-[#2A254B] mb-4" />
            <h1 className="text-[20px] mb-2 text-[#2A254B]">Next day as standard</h1>
            <p className="text-[16px] text-[#2A254B]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f9f9f9] p-8 rounded-lg shadow-md ">
            <FaRegCircleCheck className="h-[24px] w-[24px] text-[#2A254B] mb-4" />
            <h1 className="text-[20px] mb-2 text-[#2A254B]">Made by true artisans</h1>
            <p className="text-[16px] text-[#2A254B]">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f9f9f9] p-8 rounded-lg shadow-md ">
            <BiWallet className="h-[24px] w-[24px] text-[#2A254B] mb-4" />
            <h1 className="text-[20px] mb-2 text-[#2A254B]">Unbeatable prices</h1>
            <p className="text-[16px] text-[#2A254B]">
              For our materials and quality, you won’t find better prices anywhere
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f9f9f9] p-8 rounded-lg shadow-md ">
            <LuSprout className="h-[24px] w-[24px] text-[#2A254B] mb-4" />
            <h1 className="text-[20px] mb-2 text-[#2A254B]">Recycled packaging</h1>
            <p className="text-[16px] text-[#2A254B]">
              We use 100% recycled materials to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
