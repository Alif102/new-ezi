import React from "react";

const OperationTable = ({isDarkMode}) => {
  // Array containing table data
  const operations = [
    {
      operationDate: "2024-12-26 19:02:26",
      operator: "alifahmedcse@gmail.com",
      device: "45.114.88.165\nWindows 10",
      menu: "Home",
      operation: "Login to the store",
      detail: "Login to the store",
    },
    {
      operationDate: "2024-12-26 19:05:00",
      operator: "john.doe@example.com",
      device: "203.0.113.0\nmacOS Ventura",
      menu: "Dashboard",
      operation: "Viewed analytics",
      detail: "Analytics page access",
    },
    {
      operationDate: "2024-12-26 19:10:00",
      operator: "jane.doe@example.com",
      device: "198.51.100.0\nWindows 11",
      menu: "Settings",
      operation: "Changed password",
      detail: "Password updated successfully",
    },
    {
        operationDate: "2024-12-26 19:05:00",
        operator: "john.doe@example.com",
        device: "203.0.113.0\nmacOS Ventura",
        menu: "Dashboard",
        operation: "Viewed analytics",
        detail: "Analytics page access",
      },
      {
        operationDate: "2024-12-26 19:02:26",
        operator: "alifahmedcse@gmail.com",
        device: "45.114.88.165\nWindows 10",
        menu: "Home",
        operation: "Login to the store",
        detail: "Login to the store",
      },
  ];

  return (
    <div className={`overflow-x-auto p-4 ${isDarkMode ? 'bg-[#30334e]' : 'bg-white'}`}
>
      <table className="table w-full">
        <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-[#f5f8fc]'}`}
        >
          <tr>
            <th>Operation Date</th>
            <th>Operator</th>
            <th>Operation Device</th>
            <th>Operation Menu</th>
            <th>Operations</th>
            <th>Operation Detail</th>
          </tr>
        </thead>
        <tbody>
          {operations.map((operation, index) => (
            <tr className=" hover:bg-[#f5f8fc] cursor-pointer" key={index}>
              <td>{operation.operationDate.replace("\n", "<br />")}</td>
              <td>{operation.operator}</td>
              <td>
                {operation.device.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </td>
              <td>{operation.menu}</td>
              <td>{operation.operation}</td>
              <td>{operation.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OperationTable;
