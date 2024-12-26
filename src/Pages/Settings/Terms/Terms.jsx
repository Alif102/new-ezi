import React from 'react'
// import WordExport from './WordExport'

const Terms = () => {
  return (
    <div className=' w-[80%] mx-auto'>
      <div className=' flex my-7  justify-evenly flex-col md:flex-row'>
      
                      <div className='flex-1'>
                          <h1 className=' text-gray-600 my-3 text-3xl font-semibold' >Manage your store's legal pages</h1>
                          <p className=' text-gray-500 '>You can create your own legal pages, or create and customize one from our templates. The templates aren’t legal advice and need to be customized for your store..</p>
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

                  {/* <WordExport/> */}
    </div>
  )
}

export default Terms
