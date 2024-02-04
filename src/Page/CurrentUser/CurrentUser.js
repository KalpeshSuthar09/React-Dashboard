import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import CurrentUserForm from "./CurrentUserForm";
import CurrentUserList from "./CurrentUserList";




const UserPage = () => {
  const localStorageKey = "currentUser";
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(currentUser));
  }, [currentUser]);

  const currentUserForm = (data) => {
    setCurrentUser([...currentUser, { id: uuid4(), ...data }]);
  };

  const removeCurrentUser = (id) => {
    const updatedList = currentUser.filter((val) => {
      return val.id !== id;
    });
    setCurrentUser(updatedList);
  }; 

  const approveCurrentUser = (id) => {
    const updatedList = currentUser.map((user) =>
      user.id === id ? { ...user, isApproved: true } : user
    );
    setCurrentUser(updatedList);
  };
  return (

    
    <>
    <div>User</div>
        <CurrentUserForm currentUserForm={currentUserForm} />  
        <CurrentUserList currentUser={currentUser} removeCurrentUser={removeCurrentUser} approveCurrentUser={approveCurrentUser} /> 
    </>


    
  );
};

export default UserPage;
