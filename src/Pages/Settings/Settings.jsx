import React from 'react'
import basic from '../../assets/basic.png'
import payment from '../../assets/payment.png'
import shipping from '../../assets/shipping.png'
import location from '../../assets/location.png'
import customer from '../../assets/customer.png'
import administrator from '../../assets/administrator.png'


const Settings = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
    <div className="flex justify-between items-center gap-7 px-7 py-5 rounded-xl bg-white cursor-pointer hover:bg-sky-50 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)]">
      <div>
        <img src={basic} alt="icon-logo" />
      </div>
      <div>
        <h1>Basic Settings</h1>
        <p className=' text-gray-500 text-sm'>Set and update your store details</p>
      </div>
    </div>
    <div className="flex justify-between items-center gap-7 px-7 py-5 rounded-xl bg-white cursor-pointer hover:bg-sky-50 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)]">
      <div >
        <img src={payment} alt="icon-logo" />
      </div>
      <div className=''>
        <h1>Payment Settings</h1>
        <p className=' text-gray-500 text-sm'>Manage your store's payment options</p>
      </div>
    </div>


    <div className="flex justify-between items-center gap-7 px-7 py-5 rounded-xl bg-white cursor-pointer hover:bg-sky-50 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)]">
      <div>
        <img src={shipping} alt="icon-logo" />
      </div>
      <div>
        <h1>Shipping Settings</h1>
        <p className=' text-gray-500 text-sm'>Configure your shipping details</p>
      </div>
    </div>


    <div className="flex justify-between items-center gap-7 px-7 py-5 rounded-xl bg-white cursor-pointer hover:bg-sky-50 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)]">
      <div>
        <img src={location} alt="icon-logo" />
      </div>
      <div>
        <h1>Location</h1>
        <p className=' text-gray-500 text-sm'>Manage location Information</p>
      </div>
    </div>

    <div className="flex justify-between items-center gap-7 px-7 py-5 rounded-xl bg-white cursor-pointer hover:bg-sky-50 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)]">
      <div>
        <img src={customer} alt="icon-logo" />
      </div>
      <div>
        <h1>Customer Account</h1>
        <p className=' text-gray-500 text-sm'>Manage how customers sign in to your online store</p>
      </div>
    </div>
    <div className="flex justify-between items-center gap-7 px-7 py-5 rounded-xl bg-white cursor-pointer hover:bg-sky-50 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)]">
      <div>
        <img src={administrator} alt="icon-logo" />
      </div>
      <div>
        <h1>Administrator and Permissions</h1>
        <p className=' text-gray-500 text-sm'>Manage your employees and their viewing</p>
      </div>
    </div>



  </div>
  
  )
}

export default Settings
