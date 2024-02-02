import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import AddUser from "./AddUser";
import UserList from "./UserList";



const UserPage = () => {
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

    
    <>
    <div>User</div>
        <AddUser addUser={addUser} />  
        <UserList user={user} removeUser={removeUser} /> 
    </>


    
  );
};

export default UserPage;
