import { color } from "../../constants/Theme.js";
import OrderViewHeader from "../PageFilterAndButton/OrderViewHeader.jsx";
import { IconButton } from "@mui/material";

import Menu from "../../assets/svg/Menu.svg";
import List from "../../assets/svg/List.svg";

const ListViewHeader = (props) => {
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
            sx={{
              backgroundColor: color.darkIndigo,
              borderRadius: "12px",
              padding: "10px",
              color: "white",
              ":hover": {
                backgroundColor: color.darkIndigo,
              },
            }}
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

// <Button
//   variant="contained"
//   size="large"
//   sx={{ backgroundColor: color.darkIndigo }}
// >
//   Add New Company
// </Button>
