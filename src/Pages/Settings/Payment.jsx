import React from 'react'

import logo from '../../assets/ezicalc-logo.png'
import bkash from '../../assets/bkash.png'
import { FaCircle } from 'react-icons/fa'

const Payment = () => {
  return (
    <div>


        <div className=' w-[80%]  grid lg:grid-cols-10 grid-cols-1 mx-auto gap-7'>



      <div className=' lg:col-span-7 col-span-1'>
      <div className=' bg-white  px-7 py-6 rounded-lg'>
     <div className=' flex justify-between gap-2 flex-col md:flex-row' >


     <div className=' flex mb-4 gap-2 items-center'>
        <img className=' w-28 mt-1 h-[28px]' src={logo} alt="logggoo" />
        <span className=' text-xl'>Payments</span>
      </div>
      <div>
        <h1 className=' cursor-pointer text-blue-500 font-semibold'>Get an account already? Link it</h1>
     </div>

     



     
     </div>
     <p className=' font-semibold text-gray-600'>Current store location: Bangladesh</p>
     <p className=' font-semibold text-gray-600'>SHOPLINE Payments will soon be available in Bangladesh. Stay tuned.</p>

    
    </div>




    <div className='my-10 '>
        <h1 className=' font-semibold text-gray-600'>More payment settings</h1>
        <p className=' text-gray-500 text-xs'>Offer your customers more payment options to enhance their payment experience and boost success rates.</p>
    </div>

    <div className='bg-white my-10  px-7 py-6 rounded-lg'>
        <h1 className=' font-semibold text-gray-600'>Credit or debit card</h1>
        <p>Add one payment provider your customers can use to complete payments on the checkout page. <span className=' underline text-gray-500'> View example</span></p>
        <button
  
  className="px-2 py-1 my-3 bg-white border border-gray-300   rounded-lg"
>
  Select Service Provider
</button>
    </div>
    <div className='bg-white  px-7 py-6 rounded-lg'>
        <h1 className=' font-semibold text-gray-600'>Other payment methods</h1>
        <p>Customers need to go to the third-party site to complete their payment. You can also activate multiple service providers at once. <span className=' underline text-gray-500'> View example</span></p>
     
     
     
      <div className=' flex justify-between flex-col md:flex-row space-y-3 items-center border border-gray-300 rounded-lg p-4 mt-4'>
      <div className=''>
       <div className='  flex mb-4 gap-2 items-center'>
        <img className=' w-32 ' src={bkash} alt="logggoo" />
        <button className='  bg-gray-100 px-3 text-xs py-2 rounded-2xl'>Not Activated</button>
      </div>

      <p className=' text-sm text-gray-400'>Link your preferred PayPal account to reduce transaction risks.</p>
       </div>


       <div>
        <h1 className=' text-blue-500 text-sm font-semibold'>Enabled</h1>
       </div>
      </div>

      <button
  
  className="px-2 py-1 my-3 bg-white border border-gray-300   rounded-lg"
>
  ADD
</button>

     
    </div>




    <div className='bg-white mt-4 mb-5  px-7 py-6 rounded-lg'>
        <h1 className=' font-semibold text-gray-600'>Custom payment methods</h1>
        <p>If customers pay this way, you'll need to mark the order as paid manually. <span className=' underline text-gray-500'> View example</span></p>
     
     
     
      <div className=' flex justify-between flex-col md:flex-row space-y-3 items-center border border-gray-300 rounded-lg p-4 mt-4'>
      <div className=''>
       <div className='  flex mb-4 gap-2 items-center'>
        <h1 className='font-semibold text-gray-600'> Cash On Delivery</h1>
        <button className='  bg-gray-100 px-3 text-xs py-2 rounded-2xl'>Not Activated</button>
      </div>

       </div>


       <div>
        <h1 className=' text-blue-500 text-sm font-semibold'>Enabled</h1>
       </div>
      </div>

   <div className="w-20">
  <select id="product-type" name="product-type" className=" px-2 py-1 my-3 bg-white border border-gray-300   rounded-lg block w-full mt-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="ADD">ADD</option>
    <option value="Manually">Manually</option>
  
  </select>
</div>

     
    </div>

  




      </div>



   
   
   
   
   
   {/* right side */}
   
    <div className=' lg:col-span-3 col-span-1 '>


       <div className='bg-[#ebecee] rounded-xl  p-5'>
        <h1 className=' font-semibold text-gray-700'>Payment capture method</h1>
        <div className="flex items-center space-x-2">
        <FaCircle className="text-blue-500 w-3 h-3" />

      <span className="text-gray-500 my-2 text-sm">Automatically capture the customer's payment.</span>
    </div>

    <button
  
        className="px-2 py-1 my-3 bg-white border border-gray-300   rounded-lg"
      >
        Manage
      </button>
       </div>

       <div className='bg-[#ebf0f5] rounded-xl p-5 my-4'>
        <h1 className=' font-semibold text-gray-700'>Custom settings</h1>



      <h1 className="text-gray-500 my-2 text-sm">Choose how to hide, sort, or rename your payment methods using apps.</h1>
  

    <button
  
        className="px-2 py-1 my-3 bg-white border border-gray-300   rounded-lg"
      >
        Visit the App store
      </button>
       </div>
    </div>
        </div>





    </div>
  )
}

export default Payment
