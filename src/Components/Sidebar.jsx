import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ezi from '../assets/ezi.png';
import ezicalc from '../assets/ezicalc.png';
import { VscCircleFilled } from 'react-icons/vsc';
import { GoHome } from 'react-icons/go';
import { PiCalculatorThin, PiPhoneIncomingThin, PiUsersLight } from 'react-icons/pi';
import { CiLock, CiMail } from 'react-icons/ci';

const Sidebar = ({ isCollapsed }) => {
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
      icon: <PiUsersLight size={23} color="text-gray-600" />,
      subItems: [{ title: 'Lists', path: '/users/list' }],
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
      title: 'POS',
      path: '/pos',
      icon: <PiCalculatorThin size={23} color="text-gray-600" />,
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
      initial={{ width: isCollapsed ? 56 : 240 }}
      animate={{ width: isCollapsed ? 56 : 240 }}
      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      className={`fixed top-0 left-0 h-full bg-[#f7f7f8] flex flex-col ${!isCollapsed ? 'shadow-xl pr-3' : ''}`}
    >
      {/* Logo */}
      <div className="flex ml-4 mt-4 items-center">
        <img src={ezi} alt="Ezicalc Logo" className="w-8 h-8" />
        {!isCollapsed && (
          <span className="ml-2 text-xl font-bold">
            <img src={ezicalc} alt="logo" className="w-[60%]" />
          </span>
        )}
      </div>

      {/* Menu Items */}
      <div className="flex-1 ml-4 mt-4 overflow-y-auto">
        {menuItems.map((item, index) => {
          const isSubmenuOpen = openMenus[index];
          const isParentOrSubActive =
            location.pathname === item.path ||
            (item.subItems && item.subItems.some((sub) => location.pathname === sub.path));

          return (
            <div key={index} className="group">
              {item.subItems ? (
                <div
                  className={`flex items-center space-x-2 justify-between p-2 cursor-pointer transition ${isParentOrSubActive ? 'bg-gray-300 text-gray-800 rounded-md' : 'hover:bg-gray-300'} ${isCollapsed ? 'justify-center' : ''}`}
                  onClick={() => toggleMenu(index)}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    {!isCollapsed && <span className="whitespace-nowrap text-sm text-gray-600">{item.title}</span>}
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
                  className={`flex items-center p-2 cursor-pointer transition ${isParentOrSubActive ? 'bg-gray-300 text-gray-800 rounded-md' : 'hover:bg-gray-300 rounded-md'} ${isCollapsed ? 'justify-start' : ''}`}
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
                        className={`flex items-center space-x-2 my-1 p-2 text-sm ${isActive ? 'text-white bg-sky-500 rounded-md' : 'hover:bg-gray-300 rounded-md'}`}
                      >
                        <VscCircleFilled size={10} className="text-gray-400" />
                        {!isCollapsed && <span className="whitespace-nowrap text-gray-600">{subItem.title}</span>}
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
