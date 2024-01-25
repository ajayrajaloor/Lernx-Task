import React from "react";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { TbMailOpenedFilled } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaChrome } from "react-icons/fa";

const LeftNav = () => {
  return (
    <nav className="mb-4 p-4 pl-10 md:flex md:items-center md:justify-between">
      <ul className="hidden md:flex md:flex-wrap md:items-center">
        <li className="flex items-center mb-4 ">
        <HiMiniSquares2X2 className="mr-2 text-blue-600 text-xl" />
        <span className="text-md">Home</span>

        </li>
        <li className="flex items-center mb-4 ">
        <TbMailOpenedFilled className="mr-2 text-blue-600 text-xl" />
        <span className="text-md">Job Invites</span>

        </li>
        <li className="flex items-center mb-4 ">
        <IoMdAnalytics className="mr-2 text-blue-600 text-xl" />
        <span className="text-md">Analytics</span>

        </li>
        <li className="flex items-center mb-4 ">
        <IoPerson className="mr-2 text-blue-600 text-xl" />
        <span className="text-md">My Profile</span>

        </li>
        <li className="flex items-center mb-4 ">
        <FaChrome className="mr-2 text-blue-600 text-xl" />
        <span className="text-md">Explore</span>

        </li>
      </ul>

       {/* Mobile View */}
       <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300">
        <div className="flex flex-wrap justify-around w-full">
          <div className="flex flex-col items-center mb-4">
            <HiMiniSquares2X2 className="text-blue-600 text-xl" />
            <span className="text-xs mt-1" style={{ zIndex: 10 }}>Home</span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <TbMailOpenedFilled className="text-blue-600 text-xl" />
            <span className="text-xs mt-1" style={{ zIndex: 10 }}>Job Invites</span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <IoMdAnalytics className="text-blue-600 text-xl" />
            <span className="text-xs mt-1" style={{ zIndex: 10 }}>Analytics</span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <IoPerson className="text-blue-600 text-xl" />
            <span className="text-xs mt-1" style={{ zIndex: 10 }}>My Profile</span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <FaChrome className="text-blue-600 text-xl" />
            <span className="text-xs mt-1" style={{ zIndex: 1 }}>Explore</span>
          </div>
      
        </div>
        </div>

      <div className="border-b border-gray-300 w-full pt-5"></div>
    </nav>
  );
};

export default LeftNav;
