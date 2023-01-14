import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { routes } from "../../../../routes/siteRoutes.routes";
import { color } from "../../../../constants/Theme.js";
const RiderOrderTableItem = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center">
      <div
        className="flex w-[99%] items-center bg-white rounded-lg py-4 gap-2"
        onClick={() => {
          navigate(routes.admin.riderHistory);
        }}
      >
        <div className=" w-[5%] flex justify-center">
          <Typography
            sx={{ color: "white" }}
            className="w-fit h-fit bg-[#4339F2] rounded ml-4 px-1"
          >
            <CheckIcon sx={{ fontSize: "small" }} />
          </Typography>
        </div>
        <Typography sx={{ width: "15%", color: color.lightGray }}>
          #003232
        </Typography>
        <div className="flex flex-col w-[30%]">
          <Typography sx={{ color: color.lightGray }}>
            10 Mar. 2021 01:37PM
          </Typography>
          <Typography sx={{ fontWeight: "700" }}>
            14, Kumolu. Ikeja, Lagos
          </Typography>
        </div>
        <div className="flex flex-col w-[30%]">
          <Typography sx={{ color: color.lightGray }}>
            10 Mar. 2021 01:37PM
          </Typography>
          <Typography sx={{ fontWeight: "700" }}>
            14, Kumolu. Ikeja, Lagos
          </Typography>
        </div>

        <Typography sx={{ width: "10%", color: color.lightGray }}>
          No
        </Typography>
        <div className="w-[10%]">
          <Typography
            sx={{
              padding: "4px",
              borderRadius: "8px",
              width: "fit-content",
              backgroundColor: color.darkIndigo,
              alignItems: "center",
              color: "white",
              fontWeight: "700",
            }}
          >
            N5,900
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RiderOrderTableItem;
