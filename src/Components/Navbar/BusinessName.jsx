import React, { useState } from "react";

const BusinessName = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedType, setSelectedType] = useState("Organic Food");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Search Input Value:", searchValue);
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative inline-block w-full text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {selectedType}
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414l-4 4.586a1 1 0 01-1.32.083l-.094-.083-4-4.586a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute right-0 z-10 mt-2 w-80 px-2 py-5 border rounded-md shadow-lg ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}
        >
          <div className="py-2 px-4">
            {/* Search Input Field */}
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Button */}
          <div className="px-4 py-2">
            <button
              onClick={handleButtonClick}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Manage Stores
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessName;
