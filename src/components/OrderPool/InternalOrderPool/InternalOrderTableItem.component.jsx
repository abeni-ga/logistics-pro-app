import { Button, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../../constants/Theme.js";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
const InternalOrderPoolTableItem = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex w-full h-24 items-center bg-white rounded-lg"
      onClick={() => {
        navigate(routes.company.internalSummary);
      }}
    >
      <Typography
        sx={{
          color: color.lightGray,
          width: "10%",
          textAlign: "center",
        }}
      >
        01
      </Typography>
      <div className="flex flex-col w-[15%] items-start">
        <Typography sx={{ color: color.darkIndigo, fontWeight: "bold" }}>
          #00112244
        </Typography>
        <Typography sx={{ color: color.darkIndigo }}>
          TC Riders pushed this
        </Typography>
      </div>
      <div className="w-[20%] flex flex-col">
        <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
        <Typography sx={{ color: color.lightGray }}>
          10/10/2021 01:37PM
        </Typography>
      </div>
      <div className="w-[20%]">
        <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
        <Typography sx={{ color: color.lightGray }}>
          10/10/2021 01:37PM
        </Typography>
      </div>
      <Typography sx={{ color: color.lightGray, width: "15%" }}>
        Books (2 Dozens)
      </Typography>
      <div className="flex flex-col gap-2 w-[10%]">
        <Typography
          sx={{
            width: "fit-content",
            padding: "2px",
            borderRadius: "4px",
            backgroundColor: color.lightGray,
            fontWeight: "bold",
            color: color.darkIndigo,
          }}
        >
          N5,900
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>Cash</Typography>
      </div>
      <Typography sx={{ width: "5%" }}>
        <MoreHorizIcon />
      </Typography>
      <Button variant="outlined">View</Button>
    </div>
  );
};

export default InternalOrderPoolTableItem;
