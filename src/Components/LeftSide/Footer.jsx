import React from 'react'

const Footer = () => {
  return (
    <div className="mt-52 ">
    <ul className="flex flex-wrap space-x-3  justify-center pr-3 ">
      <li>About</li>
      <li>Accessibility</li>
      <li>Help</li>
      <li>Privacy & terms</li>
      <li>Advertise</li>
      <li>more</li>
      {/* Repeat similar list items for other footer items */}
    </ul>
    <p className="text-gray-500 mb-3 mt-3 flex justify-center"><span className='text-blue-600'>Spehre.io</span> © 2023</p>
  </div>
  )
}

export default Footer
