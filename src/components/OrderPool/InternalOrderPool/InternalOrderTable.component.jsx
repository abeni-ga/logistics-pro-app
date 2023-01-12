import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../../constants/Theme.js";
import InternalOrderPoolTableItem from "./InternalOrderTableItem.component";

const InternalOrderPoolTable = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="flex w-full h-[5%] items-center">
        <Typography
          sx={{
            color: color.lightGray,
            width: "10%",
            textAlign: "center",
          }}
        >
          S/N
        </Typography>
        <Typography
          sx={{
            color: color.lightGray,
            width: "15%",
          }}
        >
          Order ID
        </Typography>
        <Typography
          sx={{
            color: color.lightGray,
            width: "20%",
          }}
        >
          Pick UP Address
        </Typography>
        <Typography
          sx={{ color: color.lightGray, width: "20%", textAlign: "start" }}
        >
          Delivery Address
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "10%" }}>
          Item Type
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "15%" }}>
          Charge
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "5%" }}>
          <MoreHorizIcon />
        </Typography>
      </div>
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
    </div>
  );
};

export default InternalOrderPoolTable;
