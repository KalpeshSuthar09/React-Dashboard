import React, { useState } from "react";
// import "./userpage.css";

const UserList = ({ user, removeUser }) => {
  const itemsPerPage = 5; // Set the number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(user.length / itemsPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handleChangePage(i)}>
          {i}
        </button>
      );
    }
    return <div className="pagination">{pageNumbers}</div>;
  };

  const userList = currentItems.map((val) => (
    <tr key={val.id}>
      <td className="text-left bg-white p-3">{val.email}</td>
      <td className="text-left bg-gray-100 p-3">{val.password}</td>
      <td className="p-3 bg-white">
        <button className=" bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 items-center w-32" onClick={() => removeUser(val.id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="details p-1 h-screen bg-gray-100">
        <div className="text-xl mb-2 text-center text-slate-600 hover:text-sky-400">Contact list</div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/3">Email</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/3">Password</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/3">Action</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </table>
        {renderPagination()}
      </div>
    </>
  );
};

export default UserList;
