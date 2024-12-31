import React from 'react'
// import TextEditor from './TextEditor'
import TextEd from './TextEd'
import { SlArrowLeftCircle } from 'react-icons/sl'
import { TfiArrowLeft } from 'react-icons/tfi'
import RichTextEditor from './TextEd'
import TextEditor from './TextEditor'

const Terms = ({isDarkMode}) => {
  return (
    <div className=' w-[80%] mx-auto'>
      <div className=' flex my-7  justify-evenly flex-col md:flex-row'>

        <div className='flex-1'>

          <div className=' flex gap-3 items-center'>
          <h1 className=' border border-gray-300 rounded-md p-2 cursor-pointer'>
            <TfiArrowLeft size={25} />
          </h1>
          <h1   className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-500'} my-2`}
          >
            Terms and Condition
          </h1>
          </div>
          <h1   className={`text-${isDarkMode ? 'white' : 'gray-600'} my-3 text-3xl font-semibold`}
 >Manage your store's legal pages</h1>
          <p   className={`text-${isDarkMode ? 'white' : 'gray-600'}`}
          >You can create your own legal pages, or create and customize one from our templates. The templates aren’t legal advice and need to be customized for your store..</p>
        </div>

        <div    className={`${
    isDarkMode ? 'bg-[#30334e] text-white' : 'bg-white text-black'
  } flex-1 p-4 rounded-lg`}
        >

          {/* <TextEd /> */}

          <TextEditor isDarkMode={isDarkMode}/>





        </div>







      </div>


    </div>
  )
}

export default Terms
