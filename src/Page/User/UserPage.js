import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import AddUser from "./AddUser";
import UserList from "./UserList";

const UserPage = () => {
  const [showModel, setShowModel] = useState(false);

  const localStorageKey = "user";
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(user));
  }, [user]);

  const addUser = (data) => {
    setUser([...user, { id: uuid4(), ...data }]);
  };

  const removeUser = (id) => {
    const updatedList = user.filter((val) => {
      return val.id !== id;
    });
    setUser(updatedList);
  };
  return (
    <div>
      <div className="flex flex-col">
      <button
        className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
        onClick={() => setShowModel(true)}
      >
        Add User
      </button>
      {showModel && (
        <AddUser onClose={() => setShowModel(false)} addUser={addUser} />
      )}
      <UserList user={user} removeUser={removeUser} />
      </div>
    </div>
  );
};

export default UserPage;
