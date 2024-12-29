import React, { useState } from "react";

const ProductType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Select Product Type");
  const productTypes = [
    "Arts & Entertainment",
    "Business & Industrial",
    "Computers & Electronics",
    "Health & Fitness",
    "Home & Garden",
    "Sports & Outdoors",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type); // Set the selected type
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative inline-block w-full text-left">
        <h1 className="text-sm font-medium text-gray-700 mb-1">Product Type</h1>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
        <div className="absolute right-0 z-10 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {productTypes.map((type, index) => (
              <li key={index}>
                <button
                  onClick={() => handleTypeClick(type)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100"
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductType;
