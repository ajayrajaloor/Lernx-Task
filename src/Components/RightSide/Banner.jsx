import React from 'react'

const Banner = () => {
  return (
    <div className="w-full h-[10rem] overflow-hidden rounded-sm">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyk0W5ZEFrx_M4a6oWNYUXwQ1VWMvFhmhWg&usqp=CAU"  // Replace with the actual URL of your banner image
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default Banner
