import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ezi from '../assets/ezi.png';
import ezicalc from '../assets/ezicalc.png';
import { VscCircleFilled } from 'react-icons/vsc';

import { GoHome } from 'react-icons/go';
import { PiAlignBottomThin, PiCalculatorThin, PiPhoneIncomingThin, PiUsersLight } from 'react-icons/pi';
import { CiLock, CiMail, CiSettings } from 'react-icons/ci';

const Sidebar = ({ isCollapsed, setIsCollapsed, isSmallScreen }) => {
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
    { title: 'Email', icon: <CiMail size={23} color="text-gray-600" />, path: '/Email' },
    {
      title: 'Users',
      icon: <PiUsersLight size={23} color='text-gray-600' />,
      subItems: [
        { title: 'Lists', path: '/users/list' },
      ],
    },
   
    {
      title: 'Roles & Permissions',
      icon: <CiLock size={23} color="text-gray-600" />,
      subItems: [
        { title: 'Roles', path: '/roles' },
        { title: 'Permissions', path: '/permission' },
      ],
    },
    { title: 'Contact', icon: <PiPhoneIncomingThin size={23} color="text-gray-600" />, path: '/contact' },
    {
      title: "POS",
      path: "/pos",
      icon: <PiCalculatorThin size={23} color='text-gray-600' />
    },
    {
      title: "Report",
      path: "/report",
      icon: <PiAlignBottomThin size={23} color='text-gray-600' />
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <CiSettings size={23} color='text-gray-600' />
    },
  ];

  const toggleMenu = (index) => {
    setOpenMenus((prevState) => ({
      [index]: !prevState[index],
    }));
  };

  const dropdownVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ width: isCollapsed && !isSmallScreen ? 56 : 240 }}
      animate={{ width: isCollapsed && !isSmallScreen ? 56 : 250 }}
      className={`fixed top-0 left-0 h-full bg-[#f7f7f8] flex flex-col   ${!isCollapsed ? 'shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] pr-3' : ''}`}
    >
      {/* Logo */}
      <div className="flex ml-4 mt-4 items-center">
        <img src={ezi} alt="Ezicalc Logo" className="w-[30px] ml-2 h-[33px]" />
        {!isCollapsed && (
          <span className="ml-4">
            <img src={ezicalc} alt="logo" className="w-[60%]" />
          </span>
        )}
      </div>

      {/* Menu Items */}
      <div className="flex-1 ml-4 mt-4 overflow-x-hidden overflow-y-auto">
        {menuItems.map((item, index) => {
          const isSubmenuOpen = openMenus[index];
          const isParentOrSubActive =
            location.pathname === item.path ||
            (item.subItems && item.subItems.some((sub) => location.pathname === sub.path));

          return (
            <div key={index} className="group">
              {index === 2 && !isCollapsed ? (
                <div className=" text-sm h-2 mt-4 mb-4 text-gray-600 uppercase flex items-center  justify-center space-x-2">
                  <span className="flex-1 border-t border-gray-200"></span>
                  <span className="px-2 text-sm whitespace-nowrap">APP & PAGES</span>
                  <span className="flex-1 border-t border-gray-200"></span>
                </div>)
                : index === 2 && isCollapsed ? (
                  <div className="   text-sm h-2 mt-4 mb-4    text-gray-600 uppercase flex items-center  justify-center space-x-2">
                    <span className="flex-1  border-t border-gray-200"></span>
                  </div>
                ) : null} 
              {index === 5 && !isCollapsed ? (
                <div className=" text-sm h-2 mt-4 mb-4 text-gray-600 uppercase flex items-center  justify-center space-x-2">
                  <span className="flex-1 border-t border-gray-200"></span>
                  <span className="px-2 text-sm whitespace-nowrap">Components</span>
                  <span className="flex-1 border-t border-gray-200"></span>
                </div>)
                : index === 5 && isCollapsed ? (
                  <div className="   text-sm h-2 mt-4 mb-4    text-gray-600 uppercase flex items-center  justify-center space-x-2">
                    <span className="flex-1  border-t border-gray-200"></span>
                  </div>
                ) : null} 
                
                
                   {item.subItems ? (
                <div
                  className={`flex items-center space-x-2 justify-between p-2 cursor-pointer transition ${isParentOrSubActive ? 'bg-gray-300 text-gray-800 rounded-md text-center' : 'hover:bg-gray-300'
                    } ${isCollapsed ? 'justify-center' : ''}`}
                  onClick={() => toggleMenu(index)}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    {!isCollapsed && <span className="whitespace-nowrap text-sm text-gray-600">{item.title}</span>}
                  </div>
                  {!isCollapsed && (
                    <span className="">{isSubmenuOpen ? <FaChevronDown size={16} /> : <FaChevronRight size={16} />}</span>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={`flex my-3 items-center p-2 cursor-pointer transition ${isParentOrSubActive ? 'bg-gray-300  text-gray-800 rounded-md' : 'hover:bg-gray-300 rounded-md'
                    } ${isCollapsed ? 'justify-start' : ''}`}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    {!isCollapsed && (
                      <span className="transition-all text-gray-600 duration-300 text-sm">{item.title}</span>
                    )}
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
                        className={`flex items-center space-x-2 my-1 p-2 text-sm ${isActive ? 'text-white bg-[#5393e4] rounded-md' : 'hover:bg-gray-300 rounded-md'}`}
                      >
                        <VscCircleFilled size={20} className={` text-gray-400 ${isActive ? 'text-white bg-[#5393e4] rounded-md' : 'hover:bg-gray-300 '}`} />
                        {!isCollapsed && (
                          <span className={`whitespace-nowrap text-gray-600 ${isActive ? 'text-white bg-[#5393e4] rounded-md' : 'hover:bg-gray-300 rounded-md'}`}>{subItem.title}</span>
                        )}
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
