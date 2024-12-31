import React, { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Table = ({ isDarkMode }) => {
  const [rows, setRows] = useState([
    {
      id: 1,
      user: { name: "John Doe", phone: "+1234567890", image: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/6.png" },
      email: "john.doe@example.com",
      role: "Editor",
      plan: "Team",
      status: "Inactive",
      selected: false,
    },
    {
      id: 2,
      user: { name: "Jane Smith", phone: "+9876543210", image: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/5.png" },
      email: "jane.smith@example.com",
      role: "Admin",
      plan: "Basic",
      status: "Active",
      selected: false,
    },
    {
      id: 3,
      user: { name: "Mark Lee", phone: "+1928374650", image: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/10.png" },
      email: "mark.lee@example.com",
      role: "Author",
      plan: "Company",
      status: "Pending",
      selected: false,
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
    <div className={`mx-auto ${isDarkMode ? "bg-[#30334e] text-white" : "bg-white text-black"}`}>
      <div className="overflow-x-auto">
        <table className={`min-w-full border ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"} rounded-lg`}>
          <thead>
            <tr className={isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}>
              <th className="py-5 px-4 text-left text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className={`w-4 h-4 ${isDarkMode ? "text-blue-300 border-gray-600" : "text-blue-500 border-gray-300"} rounded focus:ring-blue-400`}
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
                  row.selected ? (isDarkMode ? "bg-gray-800" : "bg-blue-50") : ""
                } border-b ${isDarkMode ? "border-gray-700" : "border-gray-300"} hover:${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
              >
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={row.selected}
                    onChange={() => handleRowSelect(row.id)}
                    className={`w-4 h-4 ${isDarkMode ? "text-blue-300 border-gray-600" : "text-blue-500 border-gray-300"} rounded focus:ring-blue-400`}
                  />
                </td>
                <td className="py-3 px-4 flex items-center space-x-4">
                  <img
                    src={row.user.image}
                    alt={row.user.name}
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <div>
                    <p className="text-sm font-medium">{row.user.name}</p>
                    <p className="text-sm">{row.user.phone}</p>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm">{row.email}</td>
                <td className="py-3 px-4 text-sm flex items-center">
                  <FiEdit className={`mr-2 ${isDarkMode ? "text-blue-300" : "text-blue-500"}`} />
                  <span>{row.role}</span>
                </td>
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
                  <button className={`${isDarkMode ? "text-red-400" : "text-red-500"} hover:text-red-800`}>
                    <FaTrash />
                  </button>
                  <button className={`${isDarkMode ? "text-blue-300" : "text-blue-600"} hover:text-blue-800`}>
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end my-4 gap-2">
          <div className="flex items-center justify-center">
            <MdArrowForwardIos className={`${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200"} p-2 rounded-lg`} size={28} />
          </div>
          <div className="flex items-center justify-center">
            <h1 className={`${isDarkMode ? "bg-blue-700 text-white" : "bg-blue-600 text-white"} p-2 rounded-full h-10 w-10 flex items-center justify-center`}>1</h1>
          </div>
          <div className="flex items-center justify-center">
            <MdArrowBackIos className={`${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200"} p-2 rounded-lg`} size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
