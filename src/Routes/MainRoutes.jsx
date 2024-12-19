import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from '../Pages/Home1';
import About1 from '../Pages/About1';
import Contact from '../Pages/Contact';
import Sidebar from '../Components/Sidebar';
import UserList from '../Pages/Users/UserList';

function MainRoutes() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div
          className={`bg-gray-800  ${
            isSidebarCollapsed ? 'w-16' : 'w-60'
          } transition-all duration-300 sticky z-20 top-0 h-screen`}
        >
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            onCollapseToggle={setIsSidebarCollapsed}
          />
        </div>

        {/* Main Content */}
        <main
          className={`flex-1 overflow-y-auto transition-all duration-300 p-4 bg-[#f7f7f9]`}
        >
          <Routes>
            <Route path="/home/home1" element={<Home1 />} />
            <Route path="/about/about1" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users/list" element={<UserList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MainRoutes;
