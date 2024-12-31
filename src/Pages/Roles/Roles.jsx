import React, { useState } from 'react';
import { BsCopy } from 'react-icons/bs';
import { SiOpenaccess } from 'react-icons/si';
import addrole from '../../assets/addrole.png'
import { CiExport } from 'react-icons/ci'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { FaFileExcel, FaPrint, FaFilePdf } from 'react-icons/fa';
import RoleTable from './RoleTable';
const Roles = ({isDarkMode}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    { image: 'https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/5.png' },
    { image: 'https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/12.png' },
    { image: 'https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/1.png' },
    { image: 'user4.jpg' },
    { image: 'user5.jpg' },
    { image: 'user6.jpg' },
  ];
    const [isOpen, setIsOpen] = useState(false);
  
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [selectAll, setSelectAll] = useState(false);
  const [userPermissions, setUserPermissions] = useState({
    read: false,
    write: false,
    create: false,
    contentRead: false,
    contentWrite: false,
    contentCreate: false,
  });

  // Handle the 'Select All' checkbox
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setUserPermissions({
      read: !selectAll,
      write: !selectAll,
      create: !selectAll,
      contentRead: !selectAll,
      contentWrite: !selectAll,
      contentCreate: !selectAll,
    });
  };

  // Handle individual checkbox changes
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setUserPermissions((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <div>
      <div>
        <h1 className=' text-2xl text-gray-500 font-bold'>Roles List</h1>
        <p className=' text-gray-500 font-semibold'>A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what user needs.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 mt-5'>
      
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Administrator</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Editor</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Editor</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Editor</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Editor</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Editor</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Editor</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Editor</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Editor</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      
      
    
      <div   className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
        <div className=" flex justify-between ">
          <div>
            <h1 className="text-gray-500 font-semibold">Total 4 Users</h1>
          </div>

          <div className="flex space-x-2 cursor-pointer">
            {users.slice(0, 3).map((user, index) => (
              <div key={index} className="relative group">
                <img
                  src={user.image}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 transition-transform duration-300 group-hover:translate-y-[-4px]"
                />
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full border-2 border-gray-300 tooltip tooltip-right"
              data-tip={`+${users.length - 3} more`}
            >
              {users.length > 3 && <p className="text-gray-700">+{users.length - 3}</p>}
            </div>
          </div>
        </div>

       <div>
         <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Restricted User</h1>
            <p onClick={openModal} className=' text-blue-400 font-semibold cursor-pointer'>Edit Role</p>
          </div>
          <div>
            <BsCopy className="cursor-pointer font-bold"  />
          </div>
        </div>
     
       </div>
      </div>
      <div  className={`max-w-lg px-6 py-4 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
    isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"
  }`}>
     
      <div>
  <div className="flex justify-between items-center mt-5">
    <div className="flex items-end">
      <img src={addrole} className=' w-[50%]' alt="Role Icon" />
    </div>
    <div>
      <h1 onClick={openModal} className="btn-color">Add Role</h1>
      <p className="text-gray-500 my-3 font-semibold">
        Add a new role, <br />
        if it doesn't exist
      </p>
    </div>
  </div>
</div>


      </div>
      </div>


      <div>
      <div className=' my-5'>
        <h1 className=' text-xl text-gray-600 font-semibold'>Total users with their roles</h1>
        <p className=' text-gray-500'>
        Find all of your company’s administrator accounts and their associate roles.          </p>
      </div>


      <div className={`flex flex-col md:flex-row gap-4 py-3 px-4 rounded-lg justify-between ${isDarkMode ? 'bg-[#30334e]' : 'bg-white'}`}>


        <div className='flex items-center gap-2'>
          <h1>Show</h1>
        <select className="select select-primary focus-within:border-blue-500 max-w-xs">
  <option selected>10</option>
  <option>50</option>
  <option>100</option>
  <option>200</option>
  <option>500</option>
</select>

<div className='  relative'>
<button 
  className={`btn border border-gray-600 ${isDarkMode ? 'bg-[#30334e]' : 'bg-white'}`} 
  onClick={toggleDropdown}
>              <CiExport size={23} /> Exports <MdOutlineArrowDropDown size={23} />
            </button>
      
            {isOpen && (
        <ul className="bg-white z-10 absolute w-32 text-center rounded-lg shadow-md">
          <li className=' cursor-pointer my-2 '>
            <FaFileExcel className="inline mr-2" />
            Excel
          </li>
          <li className=' cursor-pointer my-2 '>
            <FaPrint className="inline mr-2" />
            Print
          </li>
          <li className=' cursor-pointer my-2 '>
            <FaFilePdf className="inline mr-2" />
            PDF
          </li>
        </ul>
      )}
          </div>
        </div>

<div className=' flex flex-col md:flex-row  gap-5'>
        <label className="input input-bordered border border-gray-600 flex items-center gap-2 focus-within:border-blue-500">
  <input type="text" className="grow focus:outline-none" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

<select className="select  border border-gray-600 focus:border-blue-700   w-full ">
  <option >Select Role</option>
  <option>Admin</option>
  <option>Authour</option>
  <option>Editor</option>
  <option>Subscriber</option>
</select>
</div>

        
      </div>

      <RoleTable isDarkMode={isDarkMode}/>

    
      </div>





      {/* Modal */}
      <div className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-xl font-bold text-gray-500"
          >
            &times;
          </button>
         <div className=' text-center'>
         <h2 className="text-2xl font-semibold text-gray-500">Edit Role</h2>
         <p>Set role permissions</p>
         <div className="flex mt-3 flex-col">
      <input
        id="input"
        type="text"
        placeholder="Role Name"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
         </div>

         <div className=' my-5'>
          <h1 className=' text-xl text-gray-600 font-semibold '>Role Permissions</h1>


          <div className=' mt-4'>
  <div className="flex justify-between">
    <h1 className=' flex gap-2 items-center'>Administrator Access <SiOpenaccess /></h1>
    <div className="flex items-center">
      <input
        type="checkbox"
        id="selectAll"
        checked={selectAll}
        onChange={handleSelectAll}
        className="mr-2"
      />
      <h1>Select All</h1>
    </div>
  </div>
  <hr className="my-4" />

  <div className="flex justify-between">
    <div>
      <h1>User Management</h1>
    </div>
    <div className="flex justify-evenly gap-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="read"
          checked={userPermissions.read}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <h1>Read</h1>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="write"
          checked={userPermissions.write}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <h1>Write</h1>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="create"
          checked={userPermissions.create}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <h1>Create</h1>
      </div>
    </div>
  </div>
  
  <hr className="my-4" />

</div>




         </div>
         
         <div className=' flex justify-center gap-3 my-4'>
         <button className=' btn bg-sky-400 text-white py-1 px-7  rounded-lg text-lg'>Submit</button>
         <button onClick={closeModal} className=' btn bg-gray-600  rounded-lg px-7 text-lg'>Cancel</button>

         </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
