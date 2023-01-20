import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PPic from "../../../assets/svg/PPic.svg";

const RiderListItem = () => {
  return (
    <div className="flex w-full h-24 bg-white rounded-xl items-center">
      <div className="w-[10%] flex justify-center">
        <Avatar size="large" src={PPic} />
      </div>
      <div className="flex flex-col w-[20%]">
        <Typography className="font-bold">Bolade Davies</Typography>
        <Typography>Reg 001234567</Typography>
      </div>
      <div className="flex flex-col w-[25%]">
        <Typography className="text-lightGray">+2340101010110</Typography>
        <Typography>Boladavies@gmail.com</Typography>
      </div>
      <div className="flex flex-col w-[25%]">
        <Typography className="text-darkIndigo font-bold">
          N390,000.00
        </Typography>
        <Typography className="text-lightGray font-bold">
          200 Deliveries
        </Typography>
      </div>
      <div className="w-[15%]">
        <Typography className="bg-lightGreen text-brightGreen w-min p-1 rounded-md font-bold">
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
