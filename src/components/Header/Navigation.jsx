import { useState } from "react";
import { NavLink } from "react-router-dom";
import navData from "./NavData";

const Navigation = ({ closeNav }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavClick = () => {
    setOpenIndex(null);
    closeNav();
  };

  return (
    <ul>
      {navData.map((item, index) => (
        <li key={index} className={openIndex === index ? "open" : ""}>
          {item.path === null ? (
            <span className="nav-toggle" onClick={() => toggleDropdown(index)}>
              {item.label}
              <span className="arrow">▼</span>
            </span>
          ) : (
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleNavClick}
            >
              {item.label}
            </NavLink>
          )}

          {/* Dropdown */}
          {item.dropdown && (
            <ul className={openIndex === index ? "dropdown-open" : ""}>
              {item.dropdown.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <NavLink
                    to={subItem.path}
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={handleNavClick}
                  >
                    {subItem.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;