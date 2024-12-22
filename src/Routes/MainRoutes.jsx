import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from '../Pages/Home1';
import About1 from '../Pages/About1';
import Contact from '../Pages/Contact';
import Sidebar from '../Components/Sidebar';
import UserList from '../Pages/Users/UserList';
import Roles from '../Pages/Roles/Roles';
import Permission from '../Pages/Roles/Permission/Permission';

function MainRoutes() {
  return (
    <Router >
      <div className="flex bg-[#f7f7f9]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 h-screen p-4 bg-[#f7f7f9] ml-0 lg-custom:ml-60 mr-0 lg-custom:mr-24 overflow-y-auto">
        <Routes>
            <Route path="/home/home1" element={<Home1 />} />
            <Route path="/about/about1" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users/list" element={<UserList />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permission" element={<Permission />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MainRoutes;
