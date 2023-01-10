import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { color } from "../../../constants/Theme.js";
const UserOrderItem = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[99%] items-center bg-white rounded-lg py-4 gap-2">
        <div className=" w-[5%]">
          <div className="w-fit h-fit bg-violet-400 rounded ml-4">
            <CheckIcon />
          </div>
        </div>
        <Typography sx={{ width: "10%", color: color.lightGray }}>
          #003232
        </Typography>
        <div className="flex flex-col w-[20%]">
          <Typography sx={{ color: color.lightGray }}>
            10 Mar. 2021 01:37PM
          </Typography>
          <Typography>14, Kumolu. Ikeja, Lagos</Typography>
        </div>
        <div className="flex flex-col w-[20%]">
          <Typography sx={{ color: color.lightGray }}>
            10 Mar. 2021 01:37PM
          </Typography>
          <Typography>14, Kumolu. Ikeja, Lagos</Typography>
        </div>
        <Typography sx={{ width: "20%", color: color.lightGray }}>
          Mark Geofrey
        </Typography>
        <Typography sx={{ width: "10%", color: color.lightGray }}>
          No
        </Typography>
        <div className="w-[10%]">
          <Typography
            sx={{
              padding: "4px",
              borderRadius: "4px",
              width: "fit-content",
              backgroundColor: "#2d5287",
              alignItems: "center",
              color: "white",
            }}
          >
            N5,900
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default UserOrderItem;