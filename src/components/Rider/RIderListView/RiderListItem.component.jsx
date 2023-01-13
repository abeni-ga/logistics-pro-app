import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../../constants/Theme.js";
import PPic from "../../../assets/svg/PPic.svg";

const RiderListItem = () => {
  return (
    <div className="flex w-full h-24 bg-white rounded-xl items-center">
      <div className="w-[10%] flex justify-center">
        <Avatar size="large" sx={{ fontSize: "" }} src={PPic} />
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
        <Typography sx={{ fontWeight: "700", color: color.darkIndigo }}>
          N390,000.00
        </Typography>
        <Typography sx={{ fontWeight: "700", color: color.lightGray }}>
          200 Deliveries
        </Typography>
      </div>
      <div className="w-[15%]">
        <Typography
          sx={{
            backgroundColor: color.lightGreen,
            color: color.brightGreen,
            width: "fit-content",
            padding: "4px",
            borderRadius: "5px",
            fontWeight: "bold",
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
