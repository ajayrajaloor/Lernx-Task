import React from 'react'
import Banner from './Banner'
import Profile from './Profile'
import RightDetails from './RightDetails'

const Home = () => {
  return (
    <div className='border-t mt-3  border-gray-300 bg-slate-100 h-screen'>
      <Banner/>
      <div className='flex flex-col lg:flex-row '>
        <Profile/>
        <RightDetails/>
        </div>
    </div>
  )
}

export default Home
