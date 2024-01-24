import React from 'react';
import {
    RiSearchLine,
    RiMailLine,
    RiArrowDownSLine,
  } from "react-icons/ri";
  import { TbBell } from "react-icons/tb";

const NavRight = () => {
  return (
    <div className="navbar flex items-center justify-end space-x-4 mt-4">
      <div className=" flex items-center space-x-2 border border-gray-300 rounded p-2 w-full sm:w-10">
        <RiSearchLine className="text-gray-500 text-xl" />
        <div className="flex-grow h-6 bg-gray-500 border-r border-gray-300"></div>
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none px-5 w-full"
        />
      </div>
      <div className="relative">
        <button className="w-10 h-10 border border-gray-300 rounded-md overflow-hidden relative">
          <TbBell className="text-gray-500 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-2 right-2 mx-auto w-2 h-2 bg-red-500 rounded-full"></div>
        </button>
      </div>
      <div className="text-gray-500">
        <button className="w-10 h-10 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center">
          <RiMailLine className="text-xl" />
        </button>
      </div>
      <div className="flex items-center relative">
        <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU"
          alt="Profile"
          className="w-10 h-10 rounded-full border"
        />
        </div>
        <RiArrowDownSLine className="absolute bottom-[-0.23em] right-0 ml-2 text-xl font-bold text-gray-500" />
      </div>
    </div>
  );
};

export default NavRight;
