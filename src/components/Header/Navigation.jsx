import { NavLink } from "react-router-dom";
import navData from "./NavData";

const Navigation = () => {
  return (
    <ul>
      {navData.map((item, index) => (
        <li key={index}>
          <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
            {item.label}
            {item.dropdown && <span className="arrow"> ▼</span>}
          </NavLink>

          {/* Dropdown */}
          {item.dropdown && (
            <ul>
              {item.dropdown.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <NavLink to={subItem.path} className={({ isActive }) => isActive ? "active" : "" }>
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