import React from 'react'
import { Link } from 'react-router-dom'

const Shipping = () => {
  return (
    <div>
     <div className=' w-[80%] mx-auto py-4'>


     <div className=' flex  justify-evenly flex-col md:flex-row'>

<div className='flex-1'>
    <h1 className=' text-gray-600 my-3 text-3xl font-semibold' >Shipping fees</h1>
    <p className=' text-gray-500 '>Set delivery regions and available shipping fees at checkout. <span className=' text-blue-500'> Learn more</span>
   </p>
</div>

<div className=' bg-white flex-1 p-4 rounded-lg'>
    <h1 className=' text-gray-600 font-semibold'>General shipping rates</h1>
    <p>All products that are not in other shipping profiles.</p>



    <div className=' bg-slate-100 p-5 my-5 rounded-lg text-center my-4'>
        <h1 className=' text-gray-600 font-semibold'>Free Shipping</h1>
        <p className=' text-gray-500'>Add shipping fees so that customers can complete their checkouts</p>

       <Link to='/edit/shipping'>
       <button className=' btn my-3 bg-blue-500 text-white hover:bg-sky-600'>Add regional shipping fees</button>
       </Link>
    </div>

    
   

   


</div>





</div>
     </div>
    </div>
  )
}

export default Shipping
