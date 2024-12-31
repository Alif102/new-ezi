import React, { useState } from 'react';
import { CiExport } from 'react-icons/ci';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { FaFileExcel, FaPrint, FaFilePdf } from 'react-icons/fa';
import Table from './Table';

const UsersTable = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`px-3 py-7 mt-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div>
        <h1 className="font-semibold text-2xl my-3">Filters</h1>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4">
            <select
              className={`select w-full border focus:border-blue-700 ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-800 border-gray-600'
              }`}
            >
              <option>Select Role</option>
              <option>Admin</option>
              <option>Authour</option>
              <option>Editor</option>
              <option>Subscriber</option>
            </select>
          </div>
          <div className="col-span-4">
            <select
              className={`select w-full border focus:border-blue-700 ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-800 border-gray-600'
              }`}
            >
              <option>Select Plan</option>
              <option>Basic</option>
              <option>Company</option>
            </select>
          </div>
          <div className="col-span-4">
            <select
              className={`select w-full border focus:border-blue-700 ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-800 border-gray-600'
              }`}
            >
              <option>Select Status</option>
              <option>Active</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex md:flex-row flex-col md:justify-between gap-4 md:items-center">
          <div className="relative">
            <button
              className={`btn border ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-800 border-gray-600'
              }`}
              onClick={toggleDropdown}
            >
              <CiExport size={23} /> Exports <MdOutlineArrowDropDown size={23} />
            </button>

            {isOpen && (
              <ul
                className={`absolute w-32 text-center rounded-lg shadow-md z-10 ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
                }`}
              >
                <li className="cursor-pointer my-2">
                  <FaFileExcel className="inline mr-2" />
                  Excel
                </li>
                <li className="cursor-pointer my-2">
                  <FaPrint className="inline mr-2" />
                  Print
                </li>
                <li className="cursor-pointer my-2">
                  <FaFilePdf className="inline mr-2" />
                  PDF
                </li>
              </ul>
            )}
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row gap-3">
            <label
              className={`input input-bordered flex items-center gap-2 border focus-within:border-blue-500 ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-800 border-gray-600'
              }`}
            >
              <input
                type="text"
                className="grow focus:outline-none"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <button className="btn bg-blue-600 text-white rounded-lg text-lg">
              Add New User
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Table isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default UsersTable;
