import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-10 py-2 lg:h-[132px]">
        {/* Left: Search Icon */}
        <div className="text-xl cursor-pointer">
          <IoSearchOutline />
        </div>

        {/* Center: Logo */}
        <div className="text-[20px] lg:text-[24px] text-[#22202e] ">
          <Link href="/">Avion</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 text-xl">
        <Link href="/shoppingBaskets"><RiShoppingCart2Line className="cursor-pointer" /></Link>
          <Link href="/aboutPage"><RxAvatar className="cursor-pointer" /></Link>
          
        </div>
      </div>

      <hr className="hidden lg:block" />

      {/* Bottom Navbar */}
      <nav className="py-3 lg:py-5">
        <ul className="flex flex-wrap justify-center gap-4 lg:gap-[44px] text-sm lg:text-base text-[#22202e] font-medium">
          <li className="cursor-pointer hover:text-gray-500">Plant Pots</li>
          <li className="cursor-pointer hover:text-gray-500">Ceramics</li>
          <li className="cursor-pointer hover:text-gray-500">Tables</li>
          <li className="cursor-pointer hover:text-gray-500">Chairs</li>
          <li className="cursor-pointer hover:text-gray-500">Crockery</li>
          <li className="cursor-pointer hover:text-gray-500">Tableware</li>
          <li className="cursor-pointer hover:text-gray-500">Cutlery</li>
        </ul>
      </nav>
    </header>
  );
}
