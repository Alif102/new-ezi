import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import Home1 from "../Pages/Home1";
import About1 from "../Pages/About1";
import Contact from "../Pages/Contact";
import Sidebar from "../Components/Sidebar";
import UserList from "../Pages/Users/UserList";
import Roles from "../Pages/Roles/Roles";
import Permission from "../Pages/Roles/Permission/Permission";
import Ecommerce from "../Pages/Ecommerce/Ecommerce";
import { motion } from "framer-motion";
import Reports from "../Pages/Reports/Reports";
import Settings from "../Pages/Settings/Settings";
import Basic from "../Pages/Settings/Basic";
import Payment from "../Pages/Settings/Payment";
import Shipping from "../Pages/Settings/Shipping/Shipping";
import EditShipping from "../Pages/Settings/Shipping/EditShipping";
import Terms from "../Pages/Settings/Terms/Terms";
import Operation from "../Pages/Settings/Operation/Operation";
import Product from "../Pages/Product/Product";
import { RiSunLine } from "react-icons/ri";
import { BsMoonStarsFill } from "react-icons/bs";
import BusinessName from "../Components/Navbar/BusinessName";
import { GiFlyingFlag } from "react-icons/gi";

function MainRoutes() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Automatically close sidebar on small screens
  useEffect(() => {
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true); // Open sidebar by default on large screens
    }
  }, [isSmallScreen]);

  const handleMouseEnter = () => {
    if (!isSmallScreen && isSidebarOpen) {
      setIsCollapsed(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isSmallScreen && isSidebarOpen) {
      setIsCollapsed(true);
    }
  };

  // Toggle Sidebar on click
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => {
      if (!prevState) {
        setIsCollapsed(false); // Ensure sidebar opens fully
      }
      return !prevState;
    });
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  return (
    <Router>
<div
  className={`${
    isSmallScreen ? 'flex-col' : 'flex'
  } ${isDarkMode ? 'bg-[#282a42]' : 'bg-[#f7f7f9]'} `}
>

     
        <motion.div
          className={`${
            isSidebarOpen
              ? isSmallScreen
                ? "fixed z-40 left-0 top-0 h-full w-64 bg-white shadow-lg"
                : isCollapsed
                ? "w-16"
                : "w-64"
              : "hidden"
          } transition-all duration-300 ease-in-out`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Sidebar isDarkMode={isDarkMode} 
            isCollapsed={isCollapsed}
            isSmallScreen={isSmallScreen}
            setIsCollapsed={setIsCollapsed}
          />
        </motion.div>

        {/* Backdrop for small screens */}
        {isSidebarOpen && isSmallScreen && (
          <div
            className="fixed inset-0 z-30 bg-[#282a42] bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main
  className={`flex-1 p-4 transition-all duration-300 ${
    isDarkMode ? "bg-[#282a42]" : "bg-[#f7f7f9]"
  } ${
    isSidebarOpen && !isSmallScreen ? (isCollapsed ? "ml-1" : "ml-2") : "ml-0"
  }`}
>
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row   gap-4 p-2 md:justify-between items-center mb-10">
      <div className="flex flex-row-reverse md:flex-row gap-2 items-center">
        <h1 className="text-lg font-bold">Dashboard</h1>
        {/* Bar Icon */}
        <button
          className="lg-custom:hidden ml-4 text-2xl"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      </div>


      <div className={`flex items-center space-x-2 ${
  isDarkMode ? "bg-[#282a42]" : "bg-[#f7f7f9]"} border border-gray-300 rounded-lg p-2 w-auto`}
>
  <FaSearch className="text-gray-400" />
  <input
    type="text"
    placeholder="Search..."
    className="flex-grow bg-transparent outline-none"
  />
  <button
    className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
  >
    Search
  </button>
</div>
  
      <div className="flex gap-3 items-center">
       
    
<div>
  <BusinessName isDarkMode={isDarkMode}/>
</div>
      
        {/* Theme Toggle Button (DaisyUI) */}
        <button
          className="btn btn-ghost"
          onClick={toggleTheme}
        >
          {isDarkMode ? <BsMoonStarsFill size={20} color="yellow"  /> : <RiSunLine size={20} />}
        </button>
        <IoIosNotificationsOutline size={25} />
        <img
          className="w-8 rounded-full"
          src="https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/1.png"
          alt="user"
        />
      </div>
    </div>

          {/* Routes */}
          <Routes>
            <Route path="/product" element={<Product isDarkMode={isDarkMode} />} />
            <Route path="/home/home1" element={<Home1 />} />
            <Route path="/about/about1" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users/list" element={<UserList isDarkMode={isDarkMode} />} />
            <Route path="/roles" element={<Roles isDarkMode={isDarkMode} />} />
            <Route path="/permission" element={<Permission  isDarkMode={isDarkMode} />} />
            <Route path="/dashboards/ecommerce" element={<Ecommerce />} />
            <Route path="/report" element={<Reports/>} />
            <Route path="/settings" element={<Settings isDarkMode={isDarkMode} />} />
            <Route path="/settings/basic" element={<Basic isDarkMode={isDarkMode}/>} />
            <Route path="/settings/payment" element={<Payment isDarkMode={isDarkMode}/>} />
            <Route path="/settings/shipping" element={<Shipping isDarkMode={isDarkMode}/>} />
            <Route path="/edit/shipping" element={<EditShipping isDarkMode={isDarkMode}/>} />
            <Route path="/settings/terms" element={<Terms isDarkMode={isDarkMode}/>} />
            <Route path="/settings/operation" element={<Operation isDarkMode={isDarkMode}/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MainRoutes;
