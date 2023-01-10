import { useState } from "react";
import { NavLink } from "react-router-dom";
import { color } from "../../constants/Theme";
import NavButton from "../Buttons/NavButton/NavButton";

const SubMenu = ({ item, isOpen, toggle }) => {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => {
    if (!isOpen && item.children) {
      toggle();
      setSubNav(!subNav);
    } else if (isOpen) {
      setSubNav(!subNav);
    }
  };
  return (
    <>
      <NavLink
        onClick={showSubNav}
        to={item.children ? item.children[0]?.path : item.path}
        style={({ isActive }) =>
          isActive
            ? {
                color: color.darkIndigo,
                borderRadius: "20px",
                backgroundColor: color.lightBlue,
              }
            : null
        }
      >
        <NavButton
          isOpen={isOpen}
          icon={item.icon}
          title={item.title}
          type={item.type}
          children={item.children}
        />
      </NavLink>
      <div className="flex w-full pl-12">
        <div className="flex flex-col gap-1">
          {!isOpen
            ? null
            : item.children && subNav
            ? item.children.map((child, index) => {
                return (
                  <NavLink
                    key={index}
                    to={child.path}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: color.darkIndigo,
                          }
                        : null
                    }
                  >
                    {child.title}
                  </NavLink>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default SubMenu;
