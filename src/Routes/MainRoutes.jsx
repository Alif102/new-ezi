import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaBars } from "react-icons/fa";
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

  return (
    <Router>
      <div className="flex bg-[#f7f7f9] h-screen">
        {/* Sidebar */}
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
          <Sidebar
            isCollapsed={isCollapsed}
            isSmallScreen={isSmallScreen}
            setIsCollapsed={setIsCollapsed}
          />
        </motion.div>

        {/* Backdrop for small screens */}
        {isSidebarOpen && isSmallScreen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main
          className={`flex-1 p-4 bg-[#f7f7f9] transition-all duration-300 ${
            isSidebarOpen && !isSmallScreen ? (isCollapsed ? "ml-5" : "ml-2") : "ml-0"
          }`}
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <h1 className="text-lg font-bold">Dashboard</h1>
              {/* Bar Icon */}
              <button
                className="lg-custom:hidden ml-4 text-2xl"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>
            </div>
            <div className="flex gap-3 items-center">
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
            <Route path="/home/home1" element={<Home1 />} />
            <Route path="/about/about1" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users/list" element={<UserList />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permission" element={<Permission />} />
            <Route path="/dashboards/ecommerce" element={<Ecommerce />} />
            <Route path="/report" element={<Reports/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MainRoutes;
