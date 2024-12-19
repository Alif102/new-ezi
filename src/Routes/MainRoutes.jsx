import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from '../Pages/Home1';
import About1 from '../Pages/About1';
import Contact from '../Pages/Contact';
import Sidebar from '../Components/Sidebar';
import UserList from '../Pages/Users/UserList';
import Roles from '../Pages/Roles/Roles';
import Pos from '../Pages/Pos/Pos';
import axios from 'axios';


function MainRoutes() {
  const clientId = localStorage.getItem("clientId");

  const token = localStorage.getItem('token'); 
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const fetchProducts = async () => {
   
    try {
   
  
      
  
      // Otherwise, make the API call
      const response = await axios.get(`https://admin.ezicalc.com/api/product/get/15`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const fetchedProducts = response.data.data.data || [];
  
      setProducts(fetchedProducts);
  
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, [token]);
  console.log(products)
  console.log(filteredProducts)
  
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 bg-[#f7f7f9]">
          <Routes>
            <Route path="/home/home1" element={<Home1 />} />
            <Route path="/about/about1" element={<About1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users/list" element={<UserList />} />
            <Route path="/roles" element={<Roles />} />
            {/* <Route path="/pos" element={<Pos   products={products}  />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MainRoutes;