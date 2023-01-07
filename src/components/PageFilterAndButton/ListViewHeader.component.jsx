import { color } from "../../constants/Theme.js";
import OrderViewHeader from "../PageFilterAndButton/OrderViewHeader.jsx";
import { IconButton } from "@mui/material";

import Menu from "../../assets/svg/Menu.svg";
import List from "../../assets/svg/List.svg";

const ListViewHeader = () => {
  return (
    <div>
      <div className="flex items-center w-full">
        <div className="flex items-center gap-4 w-[35%] ">
          <IconButton
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "11px",
            }}
          >
            <img src={Menu} alt="" />
          </IconButton>
          <IconButton
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: color.darkIndigo,
              borderRadius: "12px",
              padding: "10px",
            }}
          >
            <img src={List} alt="" />
          </IconButton>
        </div>
        <OrderViewHeader btnName="Add New Company" />
      </div>
    </div>
  );
};

export default ListViewHeader;

// <Button
//   variant="contained"
//   size="large"
//   sx={{ backgroundColor: color.darkIndigo }}
// >
//   Add New Company
// </Button>
