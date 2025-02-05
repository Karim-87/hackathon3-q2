"use client"

import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { useCart } from "@/context/CartContext";
import SearchBar from "./SearchBar";
import Image from "next/image";
const Header = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="bg-white shadow-md">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-10 py-2 lg:h-[100px]">
        {/* Left: Search Icon */}
        <Link href="/SearchBar">
        <div className="text-xl cursor-pointer">
          <IoSearchOutline className="w-[30px] h-[30px]"/>
        </div>
        </Link>
        {/* Center: Logo */}
        <div className="text-[20px] lg:text-[24px] text-[#22202e] ">
          <Link href="/" className="flex text-[30px]"> <div><Image alt="logo" src="/LOGO.JPG" width="200" height="200" ></Image></div></Link>
        </div>
        
        {/* Right: Icons */}
        <div className="flex items-center gap-4 text-xl">
        <Link href="/cart">
        <div className="relative">
        <RiShoppingCart2Line className="w-[30px] h-[30px] cursor-pointer" />
        {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}</div>
        </Link>
          <Link href="/aboutPage"><RxAvatar className="w-[30px] h-[30px] cursor-pointer" /></Link>
          
        </div>
      </div>
       
      <hr className="hidden lg:block" />

      {/* Bottom Navbar */}
      <nav className="py-3 lg:py-3">
        <ul className="flex flex-wrap justify-center gap-4 lg:gap-[44px] text-sm lg:text-base text-[#22202e] font-medium">
        <Link href="/category/plant-pots"><li className="cursor-pointer hover:text-gray-500">Plant Pots</li></Link>
          <Link href="/category/ceramics"><li className="cursor-pointer hover:text-gray-500">Ceramics</li></Link>
          <Link href="/category/tables"><li className="cursor-pointer hover:text-gray-500">Tables</li></Link>
          <Link href="/category/chairs"><li className="cursor-pointer hover:text-gray-500">Chairs</li></Link>
          <Link href="/category/crockery"><li className="cursor-pointer hover:text-gray-500">Crockery</li></Link>
          <Link href="/category/tableware"><li className="cursor-pointer hover:text-gray-500">Tableware</li></Link>
          <Link href="/category/cutlery"><li className="cursor-pointer hover:text-gray-500">Cutlery</li> </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Header