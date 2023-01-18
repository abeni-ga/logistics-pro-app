import { Avatar, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { color } from "../../../constants/Theme.js";
const MarkupItem = () => {
  return (
    <div className="flex w-full min-h-[13%] bg-white rounded-lg items-center">
      <div className="flex justify-center w-[10%] ">
        <Avatar sx={{ height: "70px", width: "65px" }} />
      </div>
      <div className="flex flex-col w-[80%]">
        <Typography sx={{ fontSize: "24px", color: color.darkGray }}>
          GTBank
        </Typography>
        <Typography sx={{ color: color.darkGray, fontWeight: "17px" }}>
          5%
        </Typography>
      </div>
      <MoreVertIcon />
    </div>
  );
};

export default MarkupItem;