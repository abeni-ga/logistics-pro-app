import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MENUITEMS } from "../../../constants/AdminMenus.js";
import NavButton from "../../Buttons/NavButton/NavButton.jsx";
import UserPanel from "./UserPanel.component.jsx";
import { color } from "../../../constants/Theme.js";
import SubMenu from "../../SubMenu/SubMenu.component.jsx";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`bg-white sticky top-0 h-screen flex justify-center ${
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
            {MENUITEMS.map((item, index) => {
              return (
                <SubMenu
                  item={item}
                  isOpen={isOpen}
                  toggle={item.children ? toggle : null}
                />
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
