import React, { useEffect, useState } from "react";
import Select from 'react-select';
import axios from 'axios';

const SelectedBusiness = ({ onSelectBusinesses, businessId , setAddedProducts }) => {
  const [businesses, setBusinesses] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const token = localStorage.getItem("token");
  const clientId = localStorage.getItem("clientId");

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const cacheKey = `business_${clientId}`;
        const cacheTimeKey = `business_${clientId}_timestamp`;
        const cacheValidityDuration = 60 * 60 * 1000; // 1 hour
  
        const cachedData = localStorage.getItem(cacheKey);
        const cachedTimestamp = parseInt(localStorage.getItem(cacheTimeKey), 10);
        const now = Date.now();
  
        if (cachedData && cachedTimestamp && now - cachedTimestamp < cacheValidityDuration) {
          // Use cached data if within the validity duration
          setBusinesses(JSON.parse(cachedData));
          return;
        }
  
        if (!token) {
          console.error('Authorization token is missing!');
          return;
        }
  
        const response = await axios.get(`https://admin.ezicalc.com/api/business/index/15`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        const fetchedData = response.data.data;
        setBusinesses(fetchedData);
  
        // Cache the new data
        localStorage.setItem(cacheKey, JSON.stringify(fetchedData));
        localStorage.setItem(cacheTimeKey, Date.now().toString());
      } catch (error) {
        console.error('Error fetching businesses:', error);
  
        // Fallback to cached data if available
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
          setBusinesses(JSON.parse(cachedData));
        }
      }
    };
  
    fetchBusinesses();
  }, [token, clientId]);
  

  useEffect(() => {
    if (businesses.length > 0) {
      let selectedBusiness;
      if (businessId) {
        selectedBusiness = businesses.find(business => business.id === businessId);
      } else {
        selectedBusiness = businesses[0];
      }

      if (selectedBusiness) {
        const option = {
          value: selectedBusiness.id,
          outside_dhaka: selectedBusiness.outside_dhaka,
          inside_dhaka: selectedBusiness.inside_dhaka,
          label: selectedBusiness.name,
          clientId: selectedBusiness.client_id,
          business_apikey: selectedBusiness.business_apikey, // Include business_apikey
        };

        if (!selectedOption || selectedOption.value !== selectedBusiness.id) {
          setSelectedOption(option);
          onSelectBusinesses([{
            id: selectedBusiness.id,
            outside_dhaka: selectedBusiness.outside_dhaka,
            inside_dhaka: selectedBusiness.inside_dhaka,
            clientId: selectedBusiness.client_id,
            name: selectedBusiness.name,
            business_apikey: selectedBusiness.business_apikey, // Pass business_apikey
          }]);
        }
      }
    }
  }, [businesses, businessId]);

  const options = businesses.map(business => ({
    value: business.id,
    label: business.name,
    clientId: business.client_id,
    outside_dhaka: business.outside_dhaka,
    inside_dhaka: business.inside_dhaka,
    business_apikey: business.business_apikey, // Add business_apikey to each option
  }));

  const removeAllProducts = () => {
    setAddedProducts([]);
  };

  const handleChange = (selected) => {
    setSelectedOption(selected);
    if (selected) {
      onSelectBusinesses([{
        id: selected.value,
        clientId: selected.clientId,
        name: selected.label,
        outside_dhaka: selected.outside_dhaka,
        inside_dhaka: selected.inside_dhaka,
        business_apikey: selected.business_apikey, // Pass business_apikey
      }]);
      removeAllProducts();
    } else {
      onSelectBusinesses([]);
    }
  };
console.log(selectedOption)
  return (
    <div>
      <div className="w-[130px] h-8">
        <Select
          options={options}
          onChange={handleChange}
          value={selectedOption}
          placeholder="Select a business..."
        />
      </div>
    </div>
  );
};

export default SelectedBusiness;