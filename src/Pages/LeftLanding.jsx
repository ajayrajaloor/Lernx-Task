import React from 'react';
import Logo from '../Components/LeftSide/Logo';
import LeftNav from '../Components/LeftSide/NavLeft';
import Community from '../Components/LeftSide/Community';
import Footer from '../Components/LeftSide/Footer';

const LeftLanding = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <Logo />
      <div className="border-b border-gray-300 w-full mt-0.5"></div>
      <LeftNav />
      <Community />
      <Footer />
    </div>
  );
};

export default LeftLanding;