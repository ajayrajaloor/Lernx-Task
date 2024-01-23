import React from 'react'
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { TbMailOpenedFilled } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaChrome } from "react-icons/fa";


const LeftNav = () => {
  return (
      <nav className="mb-4 p-4 pl-10">
        <ul >
          <li className="flex items-center mb-4 ">
          

            <span className="mr-2 text-blue-600 text-xl"><HiMiniSquares2X2 /></span> Home
          </li>
          <li className="flex items-center mb-4">
            <span className="mr-2 text-blue-600 text-xl"><TbMailOpenedFilled /></span> Job Invites
          </li>
          <li className="flex items-center mb-4">
            <span className="mr-2 text-blue-600 text-xl"><IoMdAnalytics /></span> Analytics
          </li>
          <li className="flex items-center mb-4">
            <span className="mr-2 text-blue-600 text-xl"><IoPerson /></span> My Profile
          </li>
          <li className="flex items-center mb-4">
            <span className="mr-2 text-blue-600 text-xl"><FaChrome /></span> Explore
          </li>
        </ul>
        <div className="border-b border-gray-300 w-full pt-5"></div>
      </nav>
  )
}

export default LeftNav