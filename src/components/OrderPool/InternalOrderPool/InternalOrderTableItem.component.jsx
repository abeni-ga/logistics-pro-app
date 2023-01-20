import { Button, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
      <Typography className="text-lightGray w-[10%] text-center">01</Typography>
      <div className="flex flex-col w-[15%] items-start">
        <Typography className="text-darkIndigo font-bold">#00112244</Typography>
        <Typography className="text-darkIndigo">
          TC Riders pushed this
        </Typography>
      </div>
      <div className="w-[20%] flex flex-col">
        <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
        <Typography className="text-lightGray">10/10/2021 01:37PM</Typography>
      </div>
      <div className="w-[20%]">
        <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
        <Typography className="text-lightGray">10/10/2021 01:37PM</Typography>
      </div>
      <Typography className="text-lightGray w-[15%]">
        Books (2 Dozens)
      </Typography>
      <div className="flex flex-col gap-2 w-[10%]">
        <Typography className="w-min p-0.5 bg-lightGray font-bold text-darkIndigo">
          N5,900
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>Cash</Typography>
      </div>
      <Typography className="w-[5%]">
        <MoreHorizIcon />
      </Typography>
      <Button variant="outlined">View</Button>
    </div>
  );
};

export default InternalOrderPoolTableItem;
