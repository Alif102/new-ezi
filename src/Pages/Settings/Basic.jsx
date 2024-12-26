import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { PiWarningCircleLight } from 'react-icons/pi';

const Basic = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedMarketing, setIsCheckedMarketing] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      country: "",
      address: "",
      apartment: "",
      city: "",
      zip: "",
    });
    const [inputText, setInputText] = useState("Kazipara,Mirpur,Bangladesh");
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSave = () => {
      setInputText(`${formData.country}, ${formData.address}, ${formData.apartment}, ${formData.city}, ${formData.zip}`);
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };


    // Currency 
    const [isModalOpenCurrency, setIsModalOpenCurrency] = useState(false);
    const [isFinalModalOpen, setIsFinalModalOpen] = useState(false);
  
    // Function to handle opening the first modal
    const handleOpenModal = () => {
      setIsModalOpenCurrency(true);
    };
  
    // Function to handle closing the first modal
    const handleCloseModal = () => {
      setIsModalOpenCurrency(false);
    };
  
    // Function to handle opening the second modal
    const handleContinueToChange = () => {
      setIsModalOpenCurrency(false);
      setIsFinalModalOpen(true);
    };
  
    // Function to handle closing the second modal
    const handleCloseFinalModal = () => {
      setIsFinalModalOpen(false);
    };
    return (
        <div className=' w-[80%] mx-auto py-4'>



            <div className=' flex  justify-evenly flex-col md:flex-row'>

                <div className='flex-1'>
                    <h1 className=' text-gray-600 my-3 text-3xl font-semibold' >Basic store information</h1>
                    <p className=' text-gray-500 '>This information allows EZICALC and your customers to contact you.</p>
                </div>

                <div className=' bg-white flex-1 p-4 rounded-lg'>
                    <h1 className=' text-gray-600 font-semibold'>Store logo</h1>
                    <p className=' text-gray-500'>This logo is displayed on the store management page after you log into EZICALC. <span className=' text-blue-500'>Preview display here</span>. Max image size is 10MB.</p>

                    <div className="flex flex-col  my-3">
                        <label
                            htmlFor="file-input"
                            className="flex items-center justify-center w-32 h-32 border-2 border-dashed bg-gray-100 border-gray-300 rounded-lg cursor-pointer hover:border-gray-500 transition"
                        >
                            {selectedImage ? (
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            ) : (
                                <span className="text-gray-400">+ Add Image</span>
                            )}
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>
                    <h1 className=' text-gray-600 font-semibold'>Store Name</h1>
                    <div className="">
                        <input
                            type="text"
                            placeholder="Store Name."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <h1 className=' text-gray-600 mt-5 font-semibold'>Store admin contact email</h1>


                    <div className=" mt-3 ">
                        <p className=' text-gray-500'>EZICALC can contact you through this email address</p>
                        <input
                            type="text"
                            placeholder="Store Email."
                            className="w-full px-4 py-2 my-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <p className=' text-xs text-gray-500'>Your emails may appear in inboxes as: You can configure a branded email address with your domain to improve deliverability. <span className=' yext-blue-400'>Preview</span></p>
                    </div>


                </div>





            </div>



            <div className=' flex my-10  justify-evenly flex-col md:flex-row'>

                <div className='flex-1'>
                    <h1 className=' text-gray-600 my-3 text-3xl font-semibold' >Business details</h1>
                    <p className=' text-gray-500 '>Manage store billing information, product categories, and the business location's time zone.</p>
                </div>

                <div className=' bg-white flex-1 p-4 rounded-lg'>
                    <h1 className=' text-gray-600 font-semibold'>Store logo</h1>
                    <p className=' text-gray-500 text-xs'>This is the company or owner's home address. Your billing address affects tax fees, so please review it carefully for any changes. It may also impact credit card links or auto payments. We'll update the credit card linkage, but if you receive an error notification, please retry manually to prevent payment failures and ensure continued product access.
                   <span className=' text-blue-500'> Learn more</span></p>

                   
                    <h1 className=' text-gray-600 font-semibold'>Store Name</h1>
                    <div className="">
                        <input
                            type="text"
                            placeholder="Store Name."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <h1 className=' text-gray-600 mt-5 font-semibold'>Store admin contact email</h1>


                    <div className=" mt-3 ">
                        <p className=' text-gray-500'>EZICALC can contact you through this email address</p>
                        <input
                            type="text"
                            placeholder="Store Email."
                            className="w-full px-4 py-2 my-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <p className=' text-xs text-gray-500'>Your emails may appear in inboxes as: You can configure a branded email address with your domain to improve deliverability. <span className=' yext-blue-400'>Preview</span></p>
                    </div>

                    <div className="py-6">
      <div className="flex gap-3 items-center space-x-2">
        <input
          type="text"
          value={inputText}
          className="p-2 border w-auto border-gray-300 rounded"
          disabled
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className=" border border-gray-300 bg-gray-100 px-4 py-2 rounded"
        >
          Edit
        </button>
      </div>

  
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-2xl mt-3 mb-4">Edit</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Country/Region</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Country</option>
                  <option value="USA">USA</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Apartment, suite, etc.</label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter apartment or suite"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter ZIP code"
                />
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>


    <div className="w-full max-w-xs">
  <label for="product-type" className="block text-sm font-medium text-gray-700">Product Type</label>
  <select id="product-type" name="product-type" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="">Select a product type</option>
    <option value="electronics">Electronics</option>
    <option value="furniture">Furniture</option>
    <option value="clothing">Clothing</option>
    <option value="books">Books</option>
    <option value="toys">Toys</option>
  </select>
</div>

<div class="w-full my-11 max-w-xs">
  <label for="time-zone" className="block text-sm font-medium text-gray-700">Business Location Time Zone</label>
  <select id="time-zone" name="time-zone" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="">Select a Time Zone</option>
    <option value="pst">Pacific Standard Time (PST)</option>
    <option value="mst">Mountain Standard Time (MST)</option>
    <option value="cst">Central Standard Time (CST)</option>
    <option value="est">Eastern Standard Time (EST)</option>
    <option value="gmt">Greenwich Mean Time (GMT)</option>
    <option value="cet">Central European Time (CET)</option>
    <option value="ist">Indian Standard Time (IST)</option>
    <option value="aest">Australian Eastern Standard Time (AEST)</option>
  </select>
</div>




                </div>





            </div>


            
            <div className=' flex  justify-evenly flex-col md:flex-row'>

                <div className='flex-1'>
                    <h1 className=' text-gray-600 my-3 text-3xl font-semibold' >Order settings</h1>
                    <p className=' text-gray-500 '>Set order ID prefix</p>
                </div>

                <div className=' bg-white flex-1 p-4 rounded-lg'>
                    <h1 className=' text-gray-600 font-semibold'>Order ID prefix</h1>
                    <p className=' text-gray-500'>Order ID starts from 1001 by default. You may add a prefix to create custom IDs. e.g. "EN1001"
</p>

               


                    <div className=" mt-3 ">
                        <input
                            type="text"
                            placeholder="Order ID"
                            className="w-full px-4 py-2 my-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <p className=' text-sm text-gray-500'>Order ID will be displayed as1001, 1002, 1003...</p>
                    </div>


                </div>





            </div>


                     
            <div className=' flex my-7  justify-evenly flex-col md:flex-row'>

                <div className='flex-1'>
                    <h1 className=' text-gray-600 my-3 text-3xl font-semibold' >Store status</h1>
                    <p className=' text-gray-500 '>Your store can either be ‘Open’ or ‘Closed’. You may want to temporarily close the store for updates or stocktake. Products won’t be available for sale when the store is ‘Closed’.</p>
                </div>

                <div className=' bg-white flex-1 p-4 rounded-lg'>
                    <h1 className=' text-gray-600 font-semibold'>Store status</h1>

                    <div className="w-full max-w-xs">
  <select id="product-type" name="product-type" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="Open">Open</option>
    <option value="Close">Close</option>
  
  </select>
</div>
               


                  


                </div>





            </div>



            <div className=' flex mb-7  justify-evenly flex-col md:flex-row'>

<div className='flex-1'>
    <h1 className=' text-gray-600 my-3 text-3xl font-semibold' >Payment currency</h1>
    <p className=' text-gray-500 '>Choose the currency your store will accept payments in. Note that this cannot be modified once the first order has been made.</p>
</div>

<div className=' bg-white flex-1 p-4 rounded-lg'>
    <h1 className=' text-gray-600 font-semibold'>Payment currency</h1>

    <p>Australian Dollar (AUD)</p>


    <div className="">
      {/* Change Currency Button */}
      <button
        onClick={handleOpenModal}
        className="px-4 py-3 my-3 bg-gray-100  border border-gray-400 rounded-lg"
      >
        Change Currency
      </button>

      {/* First Modal: Modifying the Currency */}
      {isModalOpenCurrency && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white flex gap-2 p-6 rounded-lg w-80">
            <div className=' mt-2=1 '>
                <PiWarningCircleLight size={26}  />
            </div>
           <div className=' '>
           <h1 className=' text-lg font-semibold '>Notice</h1>
            <h3 className="">Modifying the currency may impact payments, shipping and other settings. If you continue, please check your store for accuracy. <span className=' text-blue-900'>Learn more aboutNotice on changing payment currency.</span>

<span className=' text-[#5393e4]'>Reminder: The store will be closed briefly during this process</span>.</h3>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleCloseModal}
                className="px-2 py-2 bg-gray-300 text-gray-800 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleContinueToChange}
                className="px-2 py-2 bg-blue-500 text-white rounded"
              >
                Continue to Change
              </button>
            </div>
           </div>
          </div>
        </div>
      )}

      {/* Second Modal: Final Confirmation */}
      {isFinalModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 ">
            <h3 className="text-lg font-semibold">Are you sure you want to change the currency?</h3>

            <div className="w-full max-w-xs">
  <label for="currency-type" className="block text-sm font-medium text-gray-700">Select the currency you wish to change to:</label>
  <select id="currency-type" name="currency-type" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="">Select a type</option>
    <option value="USD">USD Doller</option>
    <option value="BDT">BDT Taka</option>
   
  </select>
</div>




<p className=' text-sm text-gray-500'> It is recommended to close the store first, disable marketing activities, and make corresponding adjustments to the product prices, payment, and logistics settings before reopening the store. <span className=' text-blue-500'> Learn more .Notice on changing payment currency</span></p>
<div className=" flex items-center gap-3 my-4">

<div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="exampleCheckbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label htmlFor="exampleCheckbox" className="ml-2 text-sm text-gray-700">
              Close store at the same time
              </label>
            </div>


</div>  
<div className=" flex items-center gap-3 my-4">

<div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="exampleCheckbox"
                checked={isCheckedMarketing}
                onChange={() => setIsCheckedMarketing(!isCheckedMarketing)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label htmlFor="exampleCheckbox" className="ml-2 text-sm text-gray-700">
              Disable marketing activities at the same time
              </label>
            </div>

</div>  
            
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={handleCloseFinalModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseFinalModal}
                className="px-4 py-2 bg-sky-500 text-white rounded"
              >
                Change
              </button>


             
            </div>
          </div>
        </div>
      )}
    </div>

  



  


</div>





</div>






        </div>
    )
}

export default Basic
