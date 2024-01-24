import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center w-full md:w-3/4 lg:w-2/3 xl:w-3/4 mx-auto ml-4 md:ml-0 mt-3">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdCK-ZUuKXrBhCdZV4ZC-phqcAQPSo55-Lw&usqp=CAU" alt="Logo" className="w-12 h-12 mr-2" />
      <p className='text-sm md:text-base'>Spehre</p>
    </div>
  );
};


export default Logo;