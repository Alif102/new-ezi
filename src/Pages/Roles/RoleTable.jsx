import React, { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { MdArrowBackIos, MdArrowForwardIos, MdOutlineSubscriptions } from "react-icons/md";
import { TbChessKing } from "react-icons/tb";

const RoleTable = ({ isDarkMode }) => {
  const [rows, setRows] = useState([
    {
      id: 1,
      user: { name: "John Doe", phone: "+12345678", image: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/6.png" },
      email: "john.doe@ex.com",
      role: "Maintainer",
      plan: "Team",
      status: "Inactive",
      selected: false,
      icon: <GrHostMaintenance />,
    },
    {
      id: 2,
      user: { name: "Jane Smith", phone: "+98765432", image: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/5.png" },
      email: "jane.smith@ex.com",
      role: "Subscriber",
      plan: "Basic",
      status: "Active",
      selected: false,
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 3,
      user: { name: "Mark Lee", phone: "+19283746", image: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/10.png" },
      email: "mark.lee@ex.com",
      role: "Author",
      plan: "Company",
      status: "Pending",
      selected: false,
      icon: <TbChessKing />,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const updatedSelectAll = !selectAll;
    setSelectAll(updatedSelectAll);
    setRows(rows.map((row) => ({ ...row, selected: updatedSelectAll })));
  };

  const handleRowSelect = (id) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, selected: !row.selected } : row))
    );
  };

  return (
    <div className={`mx-auto ${isDarkMode ? "bg-[#282a42] text-white" : "bg-white text-gray-800"}`}>
      <div className="overflow-x-auto">
        <table className={`min-w-full border ${isDarkMode ? "border-gray-700" : "border-gray-300"} rounded-lg`}>
          <thead>
            <tr className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-600"}`}>
              <th className="py-5 px-4 text-left text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className={`w-4 h-4 ${isDarkMode ? "bg-gray-800 border-gray-600" : "text-blue-500 border-gray-300"} rounded focus:ring-blue-400`}
                />
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold">User</th>
              <th className="py-2 px-4 text-left text-sm font-semibold">Email</th>
              <th className="py-2 px-4 text-left text-sm font-semibold">Role</th>
              <th className="py-2 px-4 text-left text-sm font-semibold">Plan</th>
              <th className="py-2 px-4 text-left text-sm font-semibold">Status</th>
              <th className="py-2 px-4 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className={`${
                  row.selected ? "bg-blue-50 dark:bg-blue-900" : ""
                } ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} border-b ${
                  isDarkMode ? "border-gray-700" : "border-gray-300"
                }`}
              >
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={row.selected}
                    onChange={() => handleRowSelect(row.id)}
                    className={`w-4 h-4 ${isDarkMode ? "bg-gray-800 border-gray-600" : "text-blue-500 border-gray-300"} rounded focus:ring-blue-400`}
                  />
                </td>
                <td className="py-3  pr-12 flex items-center space-x-4">
                  <img
                    src={row.user.image}
                    alt={row.user.name}
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <div>
                    <p className="text-sm font-medium">{row.user.name}</p>
                    <p className="text-sm text-gray-500">{row.user.phone}</p>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm">{row.email}</td>
                <td className="py-3 px-4 text-sm flex gap-3 items-center">{row.icon} {row.role}</td>
                <td className="py-3 px-4 text-sm">{row.plan}</td>
                <td>
                  <button
                    className={`py-1 px-4 text-sm font-medium rounded-xl text-center ${
                      row.status === "Active"
                        ? "bg-green-200 text-green-600"
                        : row.status === "Pending"
                        ? "bg-gray-200 text-gray-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {row.status}
                  </button>
                </td>
                <td className="py-3 px-4 flex space-x-2">
                  <button className="text-red-500 hover:text-red-800">
                    <FaTrash />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end my-4 gap-2">
          <div className="flex items-center justify-center">
            <MdArrowForwardIos
              className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200"} p-2 rounded-lg`}
              size={28}
            />
          </div>
          <div className="flex items-center justify-center">
            <h1
              className={`p-2 rounded-full h-10 w-10 flex items-center justify-center ${
                isDarkMode ? "bg-blue-700 text-white" : "bg-blue-600 text-white"
              }`}
            >
              1
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <MdArrowBackIos
              className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200"} p-2 rounded-lg`}
              size={28}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleTable;
