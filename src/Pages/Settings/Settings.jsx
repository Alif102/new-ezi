import React from 'react';
import { Link } from 'react-router-dom';
import basic from '../../assets/basic.png';
import payment from '../../assets/payment.png';
import shipping from '../../assets/shipping.png';
import location from '../../assets/location.png';
import customer from '../../assets/customer.png';
import terms from '../../assets/terms.png';
import operation from '../../assets/operation.png';
import administrator from '../../assets/administrator.png';

const SettingItem = ({isDarkMode, icon, title, description, path }) => (
  <Link to={path}>
<div
  className={`flex items-center gap-7 px-7 py-5 rounded-xl w-auto md:h-40 h-auto mx-auto cursor-pointer hover:shadow-[0_5px_20px_rgba(8,_112,_184,_0.7)]  ${
    isDarkMode ? 'bg-[#30334e] ' : 'bg-white hover:bg-sky-50 '
  }`}
>      <div>
        <img src={icon} alt={`${title}-icon`} />
      </div>
      <div>
        <h1>{title}</h1>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  </Link>
);

const Settings = ({isDarkMode}) => {
  const settings = [
    {
      icon: basic,
      title: 'Basic Settings',
      description: 'Set and update your store details',
      path: '/settings/basic',
    },
    {
      icon: payment,
      title: 'Payment Settings',
      description: "Manage your store's payment options",
      path: '/settings/payment',
    },
    {
      icon: shipping,
      title: 'Shipping Settings',
      description: 'Configure your shipping details',
      path: '/settings/shipping',
    },
    {
      icon: location,
      title: 'Location',
      description: 'Manage location Information',
      path: '/settings/location',
    },
    {
      icon: customer,
      title: 'Customer Account',
      description: 'Manage how customers sign in to your online store',
      path: '/settings/customer',
    },
    {
      icon: administrator,
      title: 'Administrator and Permissions',
      description: 'Manage your employees and their viewing',
      path: '/settings/administrator',
    },
    {
      icon: operation,
      title: 'Operation Log',
      description: 'Display staffs operation log',
      path: '/settings/operation',
    },
    {
      icon: terms,
      title: 'Terms and Policies',
      description: 'Manage your stores legal policies',
      path: '/settings/terms',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {settings.map((setting, index) => (
        <SettingItem isDarkMode={isDarkMode}
          key={index}
          icon={setting.icon}
          title={setting.title}
          description={setting.description}
          path={setting.path}
        />
      ))}
    </div>
  );
};

export default Settings;
