import React from 'react'
import { FaUserCheck } from 'react-icons/fa'
import { LuUserPlus, LuUserSearch } from 'react-icons/lu'
import { MdOutlinePeopleAlt } from 'react-icons/md'
const UserStat = () => {
  return (
    <div>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      <div className='flex justify-between items-center p-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'>
        <div className='space-y-1'>
          <h1 className='text-gray-500 font-semibold'>Session</h1>
          <p><span className='text-2xl font-bold'>21,459 </span> <span className='text-green-400'>(+29%)</span></p>
          <p className='text-gray-500 font-semibold'>Total Users</p>
        </div>
        <div className=' bg-[#e7e7ff] p-2 rounded-md'>
          <MdOutlinePeopleAlt size={30} color='#666cff' />
        </div>
      </div>

      <div className='flex justify-between items-center p-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'>
        <div className='space-y-1'>
          <h1 className='text-gray-500 font-semibold'>Paid Users</h1>
          <p><span className='text-2xl font-bold'>19,860 </span> <span className='text-green-400'>(+25%)</span></p>
          <p className='text-gray-500 font-semibold'>Last week analytics</p>
        </div>
        <div className=' bg-[#ffe3e2] p-2 rounded-md'>
          <LuUserPlus size={30} color='#ff4d49' />
        </div>
      </div>

      <div className='flex justify-between items-center p-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'>
        <div className='space-y-1'>
          <h1 className='text-gray-500 font-semibold'>Active Users</h1>
          <p><span className='text-2xl font-bold'>71,423 </span> <span className='text-green-400'>(+89%)</span></p>
          <p className='text-gray-500 font-semibold'>Last week analytics</p>
        </div>
        <div className=' bg-[#e8fadd] p-2 rounded-md'>
          <FaUserCheck size={30} color='#72e128' />
        </div>
      </div>

      <div className='flex justify-between items-center p-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'>
        <div className='space-y-1'>
          <h1 className='text-gray-500 font-semibold'>Pending Users</h1>
          <p><span className='text-2xl font-bold'>262 </span> <span className='text-green-400'>(+19%)</span></p>
          <p className='text-gray-500 font-semibold'>Last week analytics</p>
        </div>
        <div className=' bg-[#fff3dd] p-2 rounded-md'>
          <LuUserSearch size={30} color='#fdb528' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserStat