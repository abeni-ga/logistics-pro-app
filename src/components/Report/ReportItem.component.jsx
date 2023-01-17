import { Typography } from "@mui/material";
import { color } from "../../constants/Theme.js";
const ReportItem = () => {
  return (
    <div className="flex h-[10%] w-full bg-white px-5 items-center">
      <div className="flex flex-col w-[20%]">
        <Typography sx={{ fontSize: "20px", color: color.gray }}>
          P01923
        </Typography>
        <Typography sx={{ fontSize: "12px", color: color.gray }}>
          12/12/21 02:35pm
        </Typography>
      </div>
      <div className="flex flex-col w-[30%]">
        <Typography sx={{ fontSize: "20px", color: color.gray }}>
          Chinedu Joseph
        </Typography>
        <Typography sx={{ color: color.gray }}>Pay on drop-off</Typography>
      </div>
      <div className="flex w-[30%]">
        <Typography
          sx={{
            backgroundColor: color.lightGreen,
            paddingX: "100px",
            borderRadius: "20px",
            paddingY: "5px",
          }}
        >
          Paid
        </Typography>
      </div>
      <Typography sx={{ width: "20%", fontSize: "20px", color: color.gray }}>
        ₦1,500
      </Typography>
    </div>
  );
};

export default ReportItem;
