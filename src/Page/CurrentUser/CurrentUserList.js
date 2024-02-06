import React, { useState } from "react";


const CurrentUserList = ({ currentUser, removeCurrentUser, approveCurrentUser, onLoginSuccess }) => {
  const itemsPerPage = 5; // Set the number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentUser.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(currentUser.length / itemsPerPage);

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

  const currentUserList = currentItems.map((val) => (
    <tr key={val.id}>
      <td>{val.name}</td>
      <td>{val.email}</td>
      <td>{val.password}</td>
      <td>
        <button
          onClick={() => approveCurrentUser(currentUser.id)}
          enable={currentUser.isApproved}
        >
          Approve
        </button> 
        <button onClick={() => removeCurrentUser(val.id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="details">
        <div>Current User list</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{currentUserList}</tbody>
        </table>
        {renderPagination()}
      </div>
    </>
  );
};

export default CurrentUserList;



