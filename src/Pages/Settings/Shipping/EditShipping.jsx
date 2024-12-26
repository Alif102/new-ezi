import React, { useState } from 'react'
import location from '../../../assets/location.png'
import delivery from '../../../assets/delivery.png'
import { FaAngleDown, FaAngleUp, FaTimes } from 'react-icons/fa'
const EditShipping = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isShippingOpen, setShippingOpen] = useState(false);
    const [isShippingOpenZip, setShippingOpenZip] = useState(false);

    // State to track checked countries
    const [checkedCountries, setCheckedCountries] = useState({
      Bangladesh: false,
      USA: false,
      UK: false,
      Canada: false,
      India: false,
      UAE: false,
    });
  
    const toggleModalShipping = () => setShippingOpen(!isShippingOpen);
    const toggleModalShippingZip = () => setShippingOpenZip(!isShippingOpenZip);
  
    // Handle checkbox changes
    const handleCheckboxChange = (country) => {
      setCheckedCountries((prev) => ({
        ...prev,
        [country]: !prev[country],
      }));
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);


  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelect = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div className=' w-[80%] mx-auto'>
      <div className=' bg-white my-7 p-6 rounded-lg '>
        <h1 className=' font-semibold text-gray-700'>Products</h1>
        <p className=' text-center text-gray-500 my-7'>No Data Available</p>
      </div>
      <div className=' bg-white p-6 '>
      <div className="relative flex flex-col md:flex-row justify-between items-center rounded-lg border-b border-gray-300">
  <h1 className="font-semibold text-gray-700">Default grouping</h1>
  <div className="w-40">
    <select
      id="product-type"
      name="product-type"
      className="px-2 py-1 my-3 bg-white border border-gray-300 rounded-lg block w-full mt-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      <option value="Manage">Manage Group</option>
      <option value="ADD">Add Group</option>
    </select>
  </div>
  {/* Blue border for the first 200px */}
  <div
    className="absolute md:block hidden bottom-0 left-0 h-[1px] bg-blue-500"
    style={{ width: "130px" }}
  ></div>
</div>

<div className=' flex justify-between flex-col md:flex-row '>
   <div className=' flex gap-2 items-center'>
   <img src={location} className=' w-10 h-10' alt="dfgd" />
   <h1 className=' font-semibold text-gray-700'>Delivery address</h1>
   </div>
    
   <div className="flex flex-col items-center">
      <button
        onClick={toggleModal}
        className="px-2 py-1 my-3 bg-white border border-gray-300 rounded-lg"
      >
        ADD
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Add shipping addressm</h2>

            {/* Search Input */}
            <div className="mb-4">
              <label htmlFor="search" className="block my-3 text-sm font-medium text-gray-700">
                Search Places
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type to search..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <p className=' text-sm text-gray-500 my-2'>Locations not added to other groups will use the default group's shipping plan.</p>
            </div>

            {/* Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="exampleCheckbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label htmlFor="exampleCheckbox" className="ml-2 text-sm font-semibold text-gray-700">
                Defult
              </label>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
        
                className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-sky-600"
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
</div>

<div className="p-4">
      {/* Header Section */}
      <h1 
        className="flex gap-1 items-center cursor-pointer text-lg font-semibold" 
        onClick={() => setIsOpen(!isOpen)}
      >
        All locations (excluding other grouped shipping addresses)
        <FaAngleDown />
      </h1>

      {/* Toggle Section */}
      {isOpen && (
        <div className="mt-4  p-4 rounded shadow-md">

<div className=' flex items-center gap-4'>
<img src={location} className='   w-10 h-10' alt="dfgd" />

<div>
<h1 className=' font-semibold text-gray-700'>Default</h1>
<p className="text-sm text-gray-700">
This is the location created automatically by SHOPLINE.,Washington District of Columbia,United States
</p>
</div>
</div>
          <button
            className="mt-4 flex items-center gap-2 text-red-500 font-medium hover:text-red-700"
            onClick={() => setIsOpen(false)}
          >
            <FaAngleUp /> Hide Tails
          </button>
        </div>
      )}
    </div>
    <div className=' border-b my-5'></div>

    <div className=' bg-white  rounded-lg '>
    <div className=' flex gap-2 items-center'>
   <img src={delivery} className=' w-10 bg-gray-100 p-2 h-10' alt="dfgd" />
   <h1 className=' font-semibold text-gray-700'>Zones and shipping rates</h1>
   </div>
       <div className=' flex flex-col items-center justify-center'>
       <p className=' text-center text-gray-500 my-7'>No Data Available</p>
       <div className="">
      {/* Button to open modal */}
      <button
        onClick={toggleModalShipping}
        className="px-3 w-auto py-1 bg-blue-500 text-white rounded"
      >
        Add a shipping zone
      </button>

      {/* Modal */}
      {isShippingOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Select Shipping Zones</h2>
              <button
                onClick={toggleModalShipping}
                className="text-gray-600 hover:text-gray-900"
              >
                ✖
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 mb-2">Choose countries:</p>
              <div className="grid grid-cols-2 gap-3">
                {/* Checkbox items */}
                {Object.keys(checkedCountries).map((country) => (
                  <label
                    key={country}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={checkedCountries[country]}
                      onChange={() => handleCheckboxChange(country)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
                    />
                    <span>{country}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Actions */}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={toggleModalShipping}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={toggleModalShipping}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white  hover:bg-blue-600"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
       </div>
      </div>

      <div className=' border-b my-5'></div>







      
    <div className=' bg-white  rounded-lg '>


        <div className=' flex justify-between gap-3 flex-col md:flex-row'>
    <div className=' flex gap-2 items-center'>
   <img src={delivery} className=' w-10 bg-gray-100 p-2 h-10' alt="dfgd" />
   <h1 className=' font-semibold text-gray-700'>Shipping address (according to zip code)</h1>
   </div>
    
       <div className="">
      {/* Button to open modal */}
      <button
        onClick={toggleModalShippingZip}
        className="px-3 w-auto py-1  border border-r-gray-300 hover:bg-blue-500 hover:text-white rounded"
      >
        Add a shipping zone
      </button>

      {/* Modal */}
      {isShippingOpenZip && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-lg w-full sm:w-1/3">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold my-5">Add a shipping zone</h2>
        <button
          onClick={toggleModalShippingZip}
          className="text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>
    
      {/* Actions */}
      <div>
        <div className="mb-4">
          <label htmlFor="region-name" className="block text-sm font-medium text-gray-700">Region name (this name will not be displayed to customers)</label>
          <input 
            type="text" 
            id="region-name" 
            name="region-name" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            placeholder="Enter region name here..."
          />
        </div>

        <div className="my-7">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
            Select a Country
          </label>
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={handleSelect}
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>
              Choose a country
            </option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Specify zip code area</label>
          <textarea 
            id="zipcode" 
            name="zipcode" 
            rows="4" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter zip code area here..."
          ></textarea>

          <p className="text-sm text-gray-500 my-3">
            Separate each postal code with a comma or a new line. You can copy and paste multiple groups of postal codes with commas in one of the following formats: 1. Exact postal code, example: RG12 9FG 2. Prefix match, example: RG* 3. Number range, example 78720-78729. Entries are case-insensitive.
          </p>
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <button
          onClick={toggleModalShippingZip}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={toggleModalShippingZip}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Create
        </button>
      </div>
    </div>
  </div>
)}

    </div>
    </div>
    
      </div>


      </div>

    </div>
  )
}

export default EditShipping
