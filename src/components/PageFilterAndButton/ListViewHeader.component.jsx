import OrderViewHeader from "../PageFilterAndButton/OrderViewHeader.jsx";
import { IconButton } from "@mui/material";

import Menu from "../../assets/svg/Menu.svg";
import List from "../../assets/svg/List.svg";

const ListViewHeader = (props) => {
  return (
    <div>
      <div className="flex items-center w-full">
        <div className="flex items-center gap-4 w-[35%] ">
          <IconButton className="bg-white rounded-xl p-3">
            <img src={Menu} alt="" />
          </IconButton>
          <IconButton
            className="bg-darkIndigo rounded-xl p-2 text-white hover:bg-darkIndigo"
            variant="contained"
          >
            <img src={List} alt="" />
          </IconButton>
        </div>
        <OrderViewHeader action={props.action} btnName={props.btnName} />
      </div>
    </div>
  );
};

export default ListViewHeader;
