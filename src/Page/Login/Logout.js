import React from 'react'

function Logout() {
    const logout = () => {
        localStorage.removeItem("userData");
        window.location.reload();
      };
  return (
    <div>
        <button onClick={logout} className="logout">
          LogOut
        </button>
      </div>
  )
}

export default Logout
