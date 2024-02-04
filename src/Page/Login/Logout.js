import React from 'react'

function Logout() {
    const logout = () => {
        localStorage.removeItem("Login");
        window.location.reload();
      };
      const deleteAccount = () => {
        localStorage.clear();
        window.location.reload();
      };
  return (
    <div>
        <button onClick={logout} className="logout">
          LogOut
        </button>
        <button onClick={deleteAccount} className="delete">
          Delete
        </button>
      </div>
  )
}

export default Logout
