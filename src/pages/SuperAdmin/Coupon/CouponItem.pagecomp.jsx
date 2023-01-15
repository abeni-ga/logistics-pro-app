import { Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
const CouponItem = () => {
  return (
    <div className="flex w-full min-h-[13%] bg-white rounded-lg items-center px-10">
      <Typography
        sx={{ fontSize: "24px", color: color.darkGray, width: "15%" }}
      >
        VAL021
      </Typography>
      <div className="flex flex-col w-[30%]">
        <Typography sx={{ fontSize: "24px", color: color.darkGray }}>
          Valentine Discount
        </Typography>
        <Typography sx={{ color: color.darkGray }}>
          Valentine discount
        </Typography>
      </div>
      <div className="w-[30%] flex">
        <Typography
          sx={{
            color: color.darkGray,
            backgroundColor: "#c4f5e3",
            fontSize: "17px",
            paddingX: "50px",
            borderRadius: "20px",
          }}
        >
          Active
        </Typography>
      </div>
      <Typography sx={{ fontSize: "24px", color: color.darkGray }}>
        ₦1,500
      </Typography>
    </div>
  );
};

export default CouponItem;
