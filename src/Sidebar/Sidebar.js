/* import React, { useState } from "react";
import "./Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
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
      path: "/logout",
      name: "Logout",
      icon: <MdDashboard />,
    },
    {
      path: "/ProductShow",
      name: "Product",
      icon: <MdDashboard />,
    },
    {
      path: "/user",
      name: "User",
      icon: <MdDashboard />,
      subMenu: [
        { path: "/UserPage", name: "User" }
      ],
    },
    {
      path: "/order",
      name: "Order",
      icon: <MdDashboard />,
      subMenu: [
        { path: "/Order", name: "Order" }
      ],
    },
    {
      path: "/booking",
      name: "Booking",
      icon: <MdDashboard />,
      subMenu: [
        { path: "/Booking", name: "Booking" }
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
 */
import React, { useState } from "react";
import "./Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const toggleSubmenu = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    {
      path: "/dashboard",
      name: "dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <MdDashboard />,
    },
    {
      path: "/ProductShow",
      name: "Product",
      icon: <MdDashboard />,
    },
    {
      path: "/user",
      name: "User",
      icon: <MdDashboard />,
      subMenu: [
        { path: "/UserPage", name: "User" }
      ],
    },
    {
      path: "/order",
      name: "Order",
      icon: <MdDashboard />,
      subMenu: [
        { path: "/Order", name: "Order" }
      ],
    },
    {
      path: "/booking",
      name: "Booking",
      icon: <MdDashboard />,
      subMenu: [
        { path: "/Booking", name: "Booking" }
      ],
    }
  ];

  return (
    <div className="containers">
      <div className="sidebar-enter active" style={{ width: isOpen ? "300px" : "70px" }}>
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
                  onClick={() => toggleSubmenu(index)}
                >
                  {item.name}{" "}
                  <button onClick={() => toggleSubmenu(index)} className="btn-drop">
                    <IoMdArrowDropdown />
                  </button>
                </div>

                {openDropdown === index && (
                  <ul>
                    {item.subMenu.map((subItem, subIndex) => (
                      <NavLink
                        to={subItem.path}
                        key={subIndex}
                        className="link active"
                      >
                        <div className="icon">{item.icon}</div>
                        <div className="link-text" style={{ display: isOpen ? "block" : "none" }}>
                          {subItem.name}
                        </div>
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
