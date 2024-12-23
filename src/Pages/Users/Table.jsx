import React, { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Table = () => {
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
    <div className="mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-5 px-4 text-left text-sm font-semibold text-gray-600">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                />
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">User</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Role</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Plan</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className={`${
                  row.selected ? "bg-blue-50" : ""
                } border-b border-gray-300 hover:bg-gray-100`}
              >
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={row.selected}
                    onChange={() => handleRowSelect(row.id)}
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                </td>
                <td className="py-3 px-4 flex items-center space-x-4">
                  <img
                    src={row.user.image}
                    alt={row.user.name}
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{row.user.name}</p>
                    <p className="text-sm text-gray-500">{row.user.phone}</p>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-800">{row.email}</td>
                <td className="py-3 px-4 text-sm text-gray-800">
                  <div className="flex items-center">
                    <FiEdit className="mr-2 text-blue-500" />
                    <span>{row.role}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-800">{row.plan}</td>
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

        {/* Pagination */}
        <div className="flex justify-end my-4 gap-2">
          <div className="flex items-center justify-center">
            <MdArrowForwardIos className="bg-gray-200 p-2 rounded-lg" size={28} />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="bg-blue-600 text-white p-2 rounded-full h-10 w-10 flex items-center justify-center">1</h1>
          </div>
          <div className="flex items-center justify-center">
            <MdArrowBackIos className="bg-gray-200 p-2 rounded-lg" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
