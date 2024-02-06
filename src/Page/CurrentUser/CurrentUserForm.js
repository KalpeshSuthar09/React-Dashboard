import React, { useState } from "react";


const CurrentUserForm = ({ currentUserForm }) => {
  const [currentUserData, setCurrentUserData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUserData({ ...currentUserData, [name]: value });
  };

  const handleAdd = () => {
    if (currentUserData.name === "" || currentUserData.email === "" || currentUserData.password === "") {
      alert("Please fill in all the details");
      return;
    }
    currentUserForm(currentUserData);
    setCurrentUserData({ name: "", email: "", password: "" });
  };

  return (
    <div className="popup">
      <div className="top-section">
        <h1>Current User</h1>
      </div>
      <div className="bottom-section">
        <form>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={currentUserData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={currentUserData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={currentUserData.password}
              onChange={handleChange}
            />
          </div>
        </form>
        <button onClick={handleAdd}>Add Current User</button>
      </div>
    </div>
  );
};

export default CurrentUserForm;
