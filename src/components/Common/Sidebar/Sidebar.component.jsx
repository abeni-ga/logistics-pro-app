import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Fragment, useState } from "react";
import UserPanel from "./UserPanel.component.jsx";
import SubMenu from "../../SubMenu/SubMenu.component.jsx";

const SideBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`bg-white sticky top-0 h-screen flex justify-center ${
        isOpen
          ? "min-w-[30%] md:min-w-[28%] lg:min-w-[24%] xl:min-w-[20%] 2xl:min-w-[17%]"
          : "min-w-20"
      } `}
    >
      <div
        className={`flex flex-col justify-between ${isOpen ? "w-full" : ""}`}
      >
        <div className={`flex flex-col gap-4 p-2 ${isOpen ? "w-full" : ""}`}>
          <div className="flex place-content-center">
            <UserPanel />
          </div>
          <div className="sidebar flex flex-col">
            {props.menuItems.map((item, index) => {
              return (
                <Fragment key={index}>
                  <SubMenu
                    item={item}
                    isOpen={isOpen}
                    toggle={item.children ? toggle : null}
                  />
                </Fragment>
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
