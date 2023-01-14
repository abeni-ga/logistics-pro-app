import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../constants/Theme.js";
import { Typography } from "@mui/material";
const WalletItem = () => {
  return (
    <div className="flex bg-white rounded-lg w-full min-h-[10%] items-center">
      <div className="flex justify-center w-[5%]">
        <CheckIcon
          sx={{
            color: "white",
            backgroundColor: color.bolow,
            borderRadius: "5px",
            fontSize: "medium",
            paddingX: "1px",
          }}
        />
      </div>
      <div className="flex flex-col w-[50%]">
        <Typography sx={{ fontWeight: "700", color: color.darkGray }}>
          Partner Name
        </Typography>
      </div>
      <div className="flex flex-col w-[15%]">
        <Typography sx={{ fontWeight: "700", color: color.darkIndigo }}>
          ₦6000
        </Typography>
      </div>
      <div className="w-[20%] flex justify-start">
        <Typography
          sx={{
            fontWeight: "700",
            color: color.darkIndigo,
            backgroundColor: color.lightBlue,
            paddingX: "15px",
            borderRadius: "4px",
          }}
        >
          Active
        </Typography>
      </div>
      <MoreHorizIcon sx={{ width: "5%" }} />
    </div>
  );
};

export default WalletItem;
