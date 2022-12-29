import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MENUITEMS } from "../../../constants/AdminMenus.js";
import NavButton from "../../Buttons/NavButton/NavButton.jsx";
import UserPanel from "./UserPanel.component.jsx";
import { color } from "../../../constants/Theme.js";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`bg-white h-screen flex justify-center ${
        isOpen ? "w-1/6" : "w-20"
      }`}
    >
      <div
        className={`flex flex-col justify-between ${isOpen ? "w-full" : ""}`}
      >
        <div className={`flex flex-col gap-4 p-2 ${isOpen ? "w-full" : ""}`}>
          <div className="flex place-content-center">
            <UserPanel />
          </div>
          <div className="sidebar flex flex-col">
            {MENUITEMS.map((items, index) => {
              return (
                <NavLink
                  key={index}
                  to={items.path}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          borderRadius: "20px",
                          backgroundColor: color.lightBlue,
                        }
                      : undefined
                  }
                >
                  <NavButton
                    isOpen={isOpen}
                    icon={items.icon}
                    title={items.title}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
        <button onClick={toggle} className="flex justify-end m-5">
          {isOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
