import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {  FaChevronDown, FaChevronRight, } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion
import ezi from '../assets/ezi.png';
import ezicalc from '../assets/ezicalc.png';
import { VscCircleFilled } from 'react-icons/vsc';
import { MdLockOutline } from 'react-icons/md';
import { BsTelephoneForward } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCalculator } from 'react-icons/io5';
import { LuUserRound } from 'react-icons/lu';
import { GoHome } from 'react-icons/go';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboards',
      icon: <GoHome size={23} className="text-gray-600" />, 
      subItems: [
        { title: 'E-Commerce', path: '/dashboards/ecommerce' },
        { title: 'CRM', path: '/dashboards/crm' },
      ],
    },
    {
      title: 'Roles & Permissions',
      icon: <MdLockOutline size={23} color='text-gray-600' />, 
      subItems: [
        { title: 'Roles', path: '/roles' },
        { title: 'Permissions', path: '/permission' },
      ],
    },
    { title: 'Contact', icon: <BsTelephoneForward size={23} color='text-gray-600' />, path: '/contact' }, 
    { title: 'Email', icon: <AiOutlineMail size={23} color='text-gray-600' />, path: '/Email' }, 
    {
      title: "POS",
      path: "/pos",
      icon: <IoCalculator size={23} color='text-gray-600' />
    },
    {
      title: 'Users',
      icon: <LuUserRound size={23} color='text-gray-600' />,
      subItems: [
        { title: 'Lists', path: '/users/list' },
      ],
    },
  ];

  const toggleMenu = (index) => {
    setOpenMenus((prevState) => ({
      [index]: !prevState[index], // Toggle the current menu
    }));
  };

  const dropdownVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ width: isCollapsed ? 64 : 240 }}
      animate={{ width: isCollapsed ? 64 : 240 }}
      transition={{ type: 'spring', stiffness: 50, damping: 15 }} 
      className="h-screen bg-[#f7f7f8] shadow-inner   flex flex-col"
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
     

      {/* Menu Items */}
      <div className="flex-1 ml-4 mt-4 overflow-y-auto">
      <div className="flex ml-1 items-center mb-7  ">
        <img src={ezi} alt="Ezicalc Logo" className="w-8 h-8" />
        {!isCollapsed && (
          <span className="ml-2 text-xl font-bold">
            <img src={ezicalc} alt="logo" className="w-[60%]" />
          </span>
        )}
      </div>
      {menuItems.map((item, index) => {
  const isSubmenuOpen = openMenus[index];
  const isParentOrSubActive =
    location.pathname === item.path ||
    (item.subItems && item.subItems.some((sub) => location.pathname === sub.path));

  return (
    <div key={index} className="group">
      {/* Add headings for "APP" and "Pages" */}
      {index === 2 && !isCollapsed && (
        <div className="mt-4 mb-2 text-sm  text-gray-500">APP</div>
      )}
      {index === 5 && !isCollapsed && (
        <div className="mt-4 mb-2 text-sm  text-gray-500">Pages</div>
      )}

      {item.subItems ? (
        <div
          className={`flex items-center space-x-2 justify-between p-2 cursor-pointer transition ${
            isParentOrSubActive ? 'bg-gray-300 text-gray-800' : 'hover:bg-gray-300'
          } ${isCollapsed ? 'justify-center' : ''}`}
          onClick={() => toggleMenu(index)}
        >
          <div className="flex items-center space-x-2">
            {item.icon}
            {!isCollapsed && <span className="whitespace-nowrap text-gray-600">{item.title}</span>}
          </div>
          {!isCollapsed && (
            <span className="">
              {isSubmenuOpen ? <FaChevronDown size={16} /> : <FaChevronRight size={16} />}
            </span>
          )}
        </div>
      ) : (
        <NavLink
          to={item.path}
          className={`flex items-center p-2 cursor-pointer transition ${
            isParentOrSubActive ? 'bg-gray-300 text-gray-800 rounded-md' : 'hover:bg-gray-300 rounded-md'
          } ${isCollapsed ? 'justify-start' : ''}`}
        >
          <div className="flex items-center space-x-2">
            {item.icon}
            <span
              className={`transition-all text-gray-600 duration-300 ${
                isCollapsed ? 'hidden' : 'whitespace-nowrap'
              }`}
            >
              {item.title}
            </span>
          </div>
        </NavLink>
      )}

      {!isCollapsed && item.subItems && (
        <motion.div
          initial={false}
          animate={isSubmenuOpen ? 'open' : 'closed'}
          variants={dropdownVariants}
          className="overflow-hidden"
        >
          {item.subItems.map((subItem, subIndex) => {
            const isActive = location.pathname === subItem.path;
            return (
              <NavLink
                key={subIndex}
                to={subItem.path}
                className={`flex items-center space-x-2 p-2 text-sm ${
                  isActive ? 'text-white bg-sky-500 rounded-md' : 'hover:bg-gray-300 rounded-md'
                }`}
              >
                <VscCircleFilled size={19} color={isActive ? 'white' : 'gray'} />
                <span>{subItem.title}</span>
              </NavLink>
            );
          })}
        </motion.div>
      )}
    </div>
  );
})}

      </div>
    </motion.div>
  );
};

export default Sidebar;
