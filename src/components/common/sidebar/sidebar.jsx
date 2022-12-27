import { InputAdornment, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MENUITEMS } from "../../../constants/menu.js";
import NavButton from "../../Buttons/NavButton/NavButton.jsx";
import UserPanel from "./userPanel.jsx";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container min-h-full flex">
      <div className="sidebar h-full ml-6 mr-6">
        <div className="top-sideBar">
          <UserPanel />
        </div>
        <div className="sidebar flex flex-col">
          {MENUITEMS.map((items, index) => {
            return (
              <NavLink
                to={items.path}
                style={({ isActive }) =>
                  isActive ? { border: "1px solid red" } : undefined
                }
              >
                <NavButton
                  key={index}
                  isOpen={isOpen}
                  icon={items.icon}
                  title={items.title}
                />
              </NavLink>
            );
          })}
          <button onClick={toggle}>
            {isOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
          </button>
        </div>
      </div>
      <div className="flex flex-col w-100%">
        <TextField label="Search" type="search" />
        <div className="main bg-slate-400 h-screen">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
