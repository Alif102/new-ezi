import React, { useState } from 'react'

import { CiExport } from 'react-icons/ci'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { FaFileExcel, FaPrint, FaFilePdf, FaPlus, FaTrash, FaEye } from 'react-icons/fa';
const Permission = () => {

     const [isOpen, setIsOpen] = useState(false);
      
          const toggleDropdown = () => {
            setIsOpen(!isOpen);
          };

  return (
    <div>
          <div className=' flex flex-col md:flex-row gap-4 bg-white py-3 px-2 justify-between'>
        
        
                <div className='flex items-center gap-2'>
                  <h1>Show</h1>
                <select className="select select-primary focus-within:border-blue-500 max-w-xs">
          <option selected>10</option>
          <option>50</option>
          <option>100</option>
          <option>200</option>
          <option>500</option>
        </select>
        
       
                </div>
        
        <div className=' flex flex-col md:flex-row  gap-5'>
                <label className="input input-bordered border border-gray-600 flex items-center gap-2 focus-within:border-blue-500">
          <input type="text" className="grow focus:outline-none" placeholder="Search Permission" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        
        <h1  className=" bg-[#666cff]  text-white px-3 rounded-md flex items-center gap-3"><FaPlus /> Add Permission</h1>
        </div>



        
        
                
              </div>

              <div className="mx-auto">
  <div className="overflow-x-auto">
    <table className="min-w-full rounded-lg">
      <thead>
        <tr>
          <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
          <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Assigned To</th>
          <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Created Date</th>
          <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
        </tr>
      </thead>

      <tbody className="bg-white">
        <tr className="border-b">
          <td className="py-3 px-4 font-semibold text-sm text-gray-800">Management</td>
          <td className="py-3 px-4 text-sm">
            <button className="bg-blue-100 font-semibold text-blue-600 px-3 py-1 rounded-lg">
              Administrator
            </button>
          </td>
          <td className="py-3 px-4 text-sm text-gray-800">14 Apr 2021, 8:43 PM</td>
          <td className="py-3 px-4 flex space-x-2">
            <button className="text-red-500 hover:text-red-800">
              <FaTrash />
            </button>
            <button className="text-blue-600 hover:text-blue-800">
              <FaEye />
            </button>
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-3 px-4 font-semibold text-sm text-gray-800">Add & Remove Users</td>
          <td className="py-3 px-4 flex  gap-3 text-sm">
            <button className="bg-blue-100 font-semibold text-blue-600 px-3 py-1 rounded-lg">
              Administrator
            </button>
            <button className="bg-cyan-100 font-semibold text-cyan-500 px-3 py-1 rounded-lg">
              Manager
            </button>
          </td>
          <td className="py-3 px-4 text-sm text-gray-800">14 Apr 2021, 8:43 PM</td>
          <td className="py-3 px-4 flex space-x-2">
            <button className="text-red-500 hover:text-red-800">
              <FaTrash />
            </button>
            <button className="text-blue-600 hover:text-blue-800">
              <FaEye />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      
    </div>
  )
}

export default Permission
