import React from 'react'
import NavRight from '../Components/RightSide/NavRight'
import Home from '../Components/RightSide/Home'

const RightLanding = () => {
  return (
    <div className="w-4/5 lg:w-3/4 xl:w-4/5">
        <NavRight/>
        <Home/>
    </div>
  )
}

export default RightLanding
