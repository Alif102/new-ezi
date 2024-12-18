import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from '../Pages/Home1';
import About1 from '../Pages/About1';
import Contact from '../Pages/Contact';
import Sidebar from '../Components/Sidebar';
import UserList from '../Pages/Users/UserList';


function MainRoutes() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 bg-[#f7f7f9]">
          <Routes>
            <Route path="/home/home1" element={<Home1 />} />
            <Route path="/about/about1" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="//users/list" element={<UserList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MainRoutes;
