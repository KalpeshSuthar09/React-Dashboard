import React, { useState } from "react";
import "./Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

function Sidebar({ children }) {
  let [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);
  const menuItems = [
    {
      path: "/dashboard",
      name: "dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/about",
      name: "About",
      icon: <MdDashboard />,
    },
    {
      path: "/adduser",
      name: "AddUser",
      icon: <MdDashboard />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <MdDashboard />,
    },
    {
      path: "/user",
      name: "User",
      icon: <MdDashboard />,
      subMenu: [
        { path: "/adduser", name: "AddUser" },
        { path: "/userlist", name: "UserList" },
      ],
    }
  ];

  return (
    <div className="container">
      <div className="sidebar" style={{ width: isOpen ? "300px" : "70px" }}>
        <div className="top-section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div className="bars" style={{ marginLeft: isOpen ? "70px" : "5px" }}>
            <IoMdMenu onClick={toggle} />
          </div>
        </div>

        {menuItems.map((item, index) => (
          <div key={index}>
            {item.subMenu ? (
              // Render dropdown menu with nested options
              <div className="dropdown">
                <div
                  className="link-text"
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                >
                  {item.name} <button onClick={toggleSubmenu} className="btn-drop">
                  <IoMdArrowDropdown />
                </button>
                </div>
                
                {isSubmenuOpen && (
                  <ul>
                    {item.subMenu.map((subItem, subIndex) => (
                      <NavLink
                        to={subItem.path}
                        key={subIndex}
                        className="link active"
                      >
                        <div className="icon">{item.icon}</div>
                        <div className="link-text" style={{ display: isOpen ? "block" : "none" }}>{subItem.name}</div>
                      </NavLink>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <NavLink to={item.path} className="link active">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link-text"
                >
                  {item.name}
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
