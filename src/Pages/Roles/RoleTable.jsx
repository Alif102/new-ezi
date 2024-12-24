import React, { useState } from "react";
import {  FaTrash, FaEye } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { MdArrowBackIos, MdArrowForwardIos, MdOutlineSubscriptions } from "react-icons/md";
import { TbChessKing } from "react-icons/tb";

const RoleTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      user: { name: "John Doe", phone: "+1234567890", image: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/6.png" },
      email: "john.doe@example.com",
      role: "Maintainer",
      plan: "Team",
      status: "Inactive",
      selected: false,
      icon: <GrHostMaintenance />
    },
    {
      id: 2,
      user: { name: "Jane Smith", phone: "+9876543210", image: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/5.png" },
      email: "jane.smith@example.com",
      role: "Subscriber",
      plan: "Basic",
      status: "Active",
      selected: false,  icon: <MdOutlineSubscriptions />
    },
    {
      id: 3,
      user: { name: "Mark Lee", phone: "+1928374650", image: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/10.png" },
      email: "mark.lee@example.com",
      role: "Author",
      plan: "Company",
      status: "Pending",
      selected: false, icon: <TbChessKing />
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  // Handle selecting/deselecting all rows
  const handleSelectAll = () => {
    const updatedSelectAll = !selectAll;
    setSelectAll(updatedSelectAll);
    setRows(rows.map((row) => ({ ...row, selected: updatedSelectAll })));
  };

  // Handle selecting/deselecting individual rows
  const handleRowSelect = (id) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, selected: !row.selected } : row))
    );
  };

  return (
      <div className="">
        
     
<div className=" flex justify-end my-4 gap-2">
  
<div className="flex items-center justify-center">
      <MdArrowForwardIos className="bg-gray-200  p-2 rounded-lg" size={28} />
    </div>

    <div className="flex items-center justify-center">
  <h1 className="bg-blue-600 text-white p-2 rounded-full h-10 w-10 flex items-center justify-center">1</h1>
</div>

<div className="flex items-center justify-center">
      <MdArrowBackIos className="bg-gray-200  p-2 rounded-lg" size={28} />
    </div>
</div>


        
      </div>
 
  );
};

export default RoleTable;
