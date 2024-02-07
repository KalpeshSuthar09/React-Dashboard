import React from "react";
import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

const AddUser = ({ addUser, onClose }) => {
  // const [userData, setUserData] = useState({ email: "", password: "" });
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
    setUserData({ email: "", password: "" });
  };

  return (
    <div className=" fixed inset-0 bg-gray-50 bg-opacity-100 backdrop-blur-sm flex justify-center items-center w-1/3 h-2/3 m-32">
      <div className="flex flex-col">
        <button onClick={onClose} className="place-self-end">
          <GiTireIronCross size={20}/>
        </button>
        <div className="bottom-section px-16">
          <h1 className="form-title font-bold text-2xl text-[#002D74]">
            Add User
          </h1>
          <form className="flex flex-col gap-4 ">
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={userData.email}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
          </form>
          <button
            onClick={handleAdd}
            className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 w-32"
          >
            AddUser
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
