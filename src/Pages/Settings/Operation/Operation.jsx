import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import Datepicker from 'react-tailwindcss-datepicker';
import OperationTable from './OperationTable';

// import { Datepicker } from "react-tailwindcss-datepicker";

const Operation = () => {
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });
  return (
    <div>

       <div className=' my-6'>
       <h1 className=' text-xl font-semibold text-gray-700 my-2'>
        Operation log
        </h1>
        <p className=' text-gray-500'>Keep the log for the last 3 calendar months only (based on the store's location)</p>
       </div>
        <div className=' bg-white p-5  rounded-t-xl flex gap-5 flex-wrap  justify-center md:justify-start'>
        <div class="w-64">
  <select id="operationDetail" name="operationDetail" class=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="option1">Operator Detail</option>
    <option value="option1">Operator Account</option>
    <option value="option2">Operator Name</option>
   
  </select>
</div>

<div class="w-64">
  <div class="relative ">
    <input 
      type="text" 
      id="search" 
      name="search" 
      class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder="Search..."
    />
    <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
  
      <IoSearchOutline  />
    </span>
  </div>
</div>


<div class="w-64">
  <select id="operationDetail" name="operationDetail" class=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="option1">Operation Menu</option>
    <option value="option1">Settings</option>
    <option value="option2">Producs</option>
    <option value="option2">App</option>
    <option value="option2">Orders</option>
   
  </select>
</div>

<div class="w-64">
  <select id="operationDetail" name="operationDetail" className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="option1">Operations</option>
   
   
  </select>
</div>


<div className="w-64">
<div className='  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300'>
<Datepicker 
            value={value} 
            onChange={newValue => setValue(newValue)}
            showShortcuts={true}
        /> 
</div>
    </div>


    </div>

    <OperationTable/>
    </div>
  )
}

export default Operation