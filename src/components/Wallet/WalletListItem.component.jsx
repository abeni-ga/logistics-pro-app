import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../constants/Theme.js";
import { Typography } from "@mui/material";
const WalletItem = () => {
  return (
    <div className="flex bg-white rounded-lg w-full min-h-[10%] items-center">
      <div className="flex justify-center w-[5%]">
        <CheckIcon className="text-white bg-bolow rounded-md text-md px-0.5" />
      </div>
      <div className="flex flex-col w-[50%]">
        <Typography className="font-bold text-darkGray">
          Partner Name
        </Typography>
      </div>
      <div className="flex flex-col w-[15%]">
        <Typography className="font-bold text-darkIndigo">₦6000</Typography>
      </div>
      <div className="w-[20%] flex justify-start">
        <Typography className="font-bold text-darkIndigo bg-lightBlue px-4 rounded-md">
          Active
        </Typography>
      </div>
      <MoreHorizIcon className="w-[5%]" />
    </div>
  );
};

export default WalletItem;
