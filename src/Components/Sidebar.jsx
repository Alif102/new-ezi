import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaChevronDown, FaChevronRight, FaSatellite, FaChartArea, FaUser, FaAddressBook, FaCashRegister } from 'react-icons/fa';
import { GoCircle } from 'react-icons/go'; // Import the GoCircle icon
import { motion } from 'framer-motion'; // Import Framer Motion
import ezi from '../assets/ezi.png';
import ezicalc from '../assets/ezicalc.png';
import { VscCircleFilled } from 'react-icons/vsc';
import { FaCableCar, FaEarthAmericas } from 'react-icons/fa6';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

  const menuItems = [
    {
      title: 'Home',
      icon: <FaHome size={24} className="text-gray-600" />, 
      subItems: [
        { title: 'Home 1', path: '/home/home1' },
        { title: 'Home 2', path: '/home/home2' },
      ],
    },
    {
      title: 'Roles & Permissions',
      icon: <FaAddressBook size={24} color='text-gray-600' />, // Increased icon size
      subItems: [
        { title: 'Roles', path: '/roles' },
        { title: 'Permissions', path: '/permission' },
      ],
    },
    { title: 'Contact', icon: <FaEnvelope size={24} color='text-gray-600' />, path: '/contact' }, 
    { title: 'Email', icon: <FaEarthAmericas size={24} color='text-gray-600' />, path: '/Email' }, 
    {
      title: "POS",
      path: "/pos",
      icon: <FaCashRegister size={24} color='text-gray-600' />
    },
    {
      title: 'Users',
      icon: <FaUser size={24} color='text-gray-600' />,
      subItems: [
        { title: 'Lists', path: '/users/list' },
      ],
    },
    { title: 'Chat', icon: <FaChartArea size={24} color='text-gray-600' />, path: '/Chat' }, 
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
      className="h-screen bg-[#eaebee] flex flex-col"
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <div className="flex items-center p-4 bg-[#eaebee]">
        <img src={ezi} alt="Ezicalc Logo" className="w-8 h-8" />
        {!isCollapsed && (
          <span className="ml-2 text-xl font-bold">
            <img src={ezicalc} alt="logo" className="w-[60%]" />
          </span>
        )}
      </div>

      {/* Menu Items */}
      <div className="flex-1 ml-4 overflow-y-auto">
        {menuItems.map((item, index) => {
          const isSubmenuOpen = openMenus[index];
          const isParentOrSubActive =
            location.pathname === item.path ||
            (item.subItems && item.subItems.some((sub) => location.pathname === sub.path));

          return (
            <div key={index} className="group">
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
                // <NavLink
                //   to={item.path}
                //   className={`flex items-center space-x-2 p-2 cursor-pointer transition ${
                //     isParentOrSubActive ? 'bg-gray-300 text-gray-800 rounded-md' : 'hover:bg-gray-300 rounded-md'
                //   } ${isCollapsed ? 'justify-start' : ''}`}
                // >
                //   {item.icon}
                //   {!isCollapsed && <span>{item.title}</span>}
                // </NavLink>

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
                        <VscCircleFilled size={16} color={isActive ? 'white' : 'gray'} />
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
