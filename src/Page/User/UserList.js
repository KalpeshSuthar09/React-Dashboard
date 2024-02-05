/* import React, { useState } from 'react';
import './userpage.css'

const UserList = (props) => {

    const {user, removeUser} = props
    const userList = user.map((val) => {
        return(
            <div className='details'>
                <div>{val.name}</div>
                <div>{val.email}</div>
                <span><button onClick={() => removeUser(val.id)}>Delete</button></span>
            </div>
        )
    })
    return (
        <>
        <div>Contact list</div>
        <div>{userList}</div>
        </>
    );
};

export default UserList; */

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
      <td>{val.password}</td>
      <td>{val.email}</td>
      <td>
        <button onClick={() => removeUser(val.id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="details">
      <div>Contact list</div>
      <table>
        <thead>
          <tr>
            <th>Password</th>
            <th>Email</th>
            <th>Action</th>
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
