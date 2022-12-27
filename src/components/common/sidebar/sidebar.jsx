import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MENUITEMS } from "../../../constants/menu.js";
import NavButton from "../../Buttons/NavButton/NavButton.jsx";
import TextFieldWrapper from "../../TextFieldWrapper/TextFieldWrapper";
import UserPanel from "./userPanel.jsx";
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // return (
  //   <div className="containerflex flex-row">
  //     <div className="sidebar flex flex-col w-40%">
  //       <div className="flex flex-col">
  // {MENUITEMS.map((items) => {
  //   return (
  //     <NavLink to={items.path}>
  //       <NavButton
  //         key={items.title}
  //         isOpen
  //         icon={items.icon}
  //         title={items.title}
  //       />
  //     </NavLink>
  //   );
  // })}
  //       </div>
  //     </div>
  //     <div>{children}</div>
  //   </div>
  // );
  return (
    <div className="container min-h-full flex">
      <div className="sidebar h-full w-20% ml-6">
        <div className="top-sideBar">
          <UserPanel />
        </div>
        <div className="sidebar flex flex-col">
          {MENUITEMS.map((items, index) => {
            return (
              <NavLink to={items.path}>
                <NavButton
                  key={index}
                  isOpen
                  icon={items.icon}
                  title={items.title}
                />
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="min-w-100% flex">
        <TextField label="Search" type="search" />
        <div className="main bg-slate-400">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
