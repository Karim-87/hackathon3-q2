import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { BsSkype } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";



export default function Footer() {
  return (
    <div className="bg-[#2A254B]">
      
      <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-[48px] p-10 lg:p-20 text-white justify-between">
        {/* Menu Section */}
        <div>
          <ul className="space-y-2">
            <li className="font-bold">Menu</li>
            <li>New Arrival</li>
            <li>Best Seller</li>
            <li>Recently Viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <ul className="space-y-2">
            <li className="font-bold">Categories</li>
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
            <li>Crockery</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <ul className="space-y-2">
            <li className="font-bold">Our Company</li>
            <li>
              <Link href="/aboutPage">About</Link>
            </li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div className="w-full lg:w-auto">
          <div className="mb-4 font-bold">Join our mailing list</div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              className="w-full sm:w-auto px-4 py-2 text-black rounded-lg"
              type="email"
              placeholder="Your@email.com"
            />
            <button className="px-4 py-2 bg-white text-[#2A254B] rounded-lg hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Line */}
      <hr className="border-gray-600 mx-10 lg:mx-[48px]" />

      {/* social links lagany hai */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-10 lg:px-[48px] py-5 text-white text-sm">
        <div>Copyright 2025 Ala Haven LTD</div>
        <div className="flex lg:flex-row gap-5"><div></div>
        <div><FaLinkedin /></div>
        <div><ImFacebook2 />
        </div>
        <div><IoLogoInstagram /></div>
        <div><BsSkype />
        </div>
        <div><FaTwitterSquare />
        </div><FaPinterest />
        </div>
      </div>
    </div>
  );
}
