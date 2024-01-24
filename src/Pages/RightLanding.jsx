import React from 'react'
import NavRight from '../Components/RightSide/NavRight'
import Home from '../Components/RightSide/Home'


const RightLanding = () => {
    return (
      <div className="w-full lg:w-3/4 xl:w-4/5 border-l border-gray-300 h-screen">
        <NavRight />
        <Home />
      </div>
    );
  };
  

export default RightLanding
