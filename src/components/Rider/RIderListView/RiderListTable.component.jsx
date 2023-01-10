import { Typography } from "@mui/material";
import RiderListItem from "./RiderListItem.component";
import { color } from "../../../constants/Theme.js";
const RiderListTable = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="py-4 w-full flex items-center">
        <div className=" w-[10%] h-2"></div>
        <Typography sx={{ width: "20%", color: color.lightGray }}>
          Rider Name
        </Typography>
        <Typography sx={{ width: "25%", color: color.lightGray }}>
          Contact
        </Typography>
        <Typography sx={{ width: "25%", color: color.lightGray }}>
          Earning
        </Typography>
        <Typography sx={{ width: "15%", color: color.lightGray }}>
          Detail
        </Typography>
      </div>
      <div className="flex flex-col gap-2 h-full w-full">
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
        <RiderListItem />
      </div>
    </div>
  );
};

export default RiderListTable;
