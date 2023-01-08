import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../constants/Theme.js";

const RiderListItem = () => {
  return (
    <div className="flex w-full h-[10%] bg-white rounded-xl items-center">
      <div className="w-[10%]">
        <Avatar size="large" />
      </div>
      <div className="flex flex-col w-[20%]">
        <Typography sx={{ fontWeight: "bold" }}>Bolade Davies</Typography>
        <Typography>Reg 001234567</Typography>
      </div>
      <div className="flex flex-col w-[25%]">
        <Typography sx={{ color: color.lightGray }}>+2340101010110</Typography>
        <Typography>Boladavies@gmail.com</Typography>
      </div>
      <div className="flex flex-col w-[25%]">
        <Typography sx={{ fontWeight: "bold" }}>N390,000.00</Typography>
        <Typography>200 Deliveries</Typography>
      </div>
      <div className="w-[15%]">
        <Typography
          sx={{
            backgroundColor: color.lightBlue,
            color: color.brightGreen,
            width: "fit-content",
            padding: "4px",
            borderRadius: "5px",
          }}
        >
          Active
        </Typography>
      </div>
      <Typography>
        <MoreHorizIcon />
      </Typography>
    </div>
  );
};

export default RiderListItem;
