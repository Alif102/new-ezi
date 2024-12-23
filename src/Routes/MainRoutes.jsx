import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Home1 from '../Pages/Home1';
import About1 from '../Pages/About1';
import Contact from '../Pages/Contact';
import Sidebar from '../Components/Sidebar';
import UserList from '../Pages/Users/UserList';
import Roles from '../Pages/Roles/Roles';
import Permission from '../Pages/Roles/Permission/Permission';
import Ecommerce from '../Pages/Ecommerce/Ecommerce';
import { IoIosNotificationsOutline } from 'react-icons/io';

function MainRoutes() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // Manage collapsed state here

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };

    handleResize(); // Set the initial state based on screen size
    window.addEventListener('resize', handleResize); // Update state on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setIsSidebarOpen(false); // Collapse sidebar on small screens
    } else {
      setIsSidebarOpen(true); // Expand sidebar on larger screens
    }
  }, [isSmallScreen]);

  return (
    <Router>
      <div className="flex bg-[#f7f7f9]">
        {/* Sidebar */}
        <div className={`lg-custom:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>

        {/* Main Content */}
        <main
          className={`flex-1 h-screen p-4 bg-[#f7f7f9] transition-all ${
            isSidebarOpen ? 'ml-0 lg-custom:ml-60 sm-custom:ml-60' : 'ml-0'
          }`}
        >
          <div className="flex my-4 justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-lg font-bold">Search</h1>
              {/* Bar Icon (visible on small screens) */}
              <button
                className="lg-custom:hidden ml-4 text-2xl"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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

          <Routes>
            <Route path="/home/home1" element={<Home1 />} />
            <Route path="/about/about1" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users/list" element={<UserList />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permission" element={<Permission />} />
            <Route path="/dashboards/ecommerce" element={<Ecommerce />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MainRoutes;
