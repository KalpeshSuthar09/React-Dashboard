import React from "react";
import { useState } from "react";
// import "./userpage.css";

const AddUser = ({ addUser }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    /* if (e.target.password === "password") {
      setUserData({ ...userData, name: e.target.value });
    } else {
      setUserData({ ...userData, email: e.target.value });
    } */
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAdd = () => {
    if (userData.email === "" || userData.password === "") {
      alert("Please fill the details");
      return;
    }
    addUser(userData);
    setUserData({email: "", password: "" });
  };

  return (
    <div className="popup">
      <div className="top-section">
        <h1>Add User</h1>
      </div>
      <div className="bottom-section">
        <form>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
        </form>
        <button onClick={handleAdd}>AddUser</button>
      </div>
    </div>
  );
};

export default AddUser;
