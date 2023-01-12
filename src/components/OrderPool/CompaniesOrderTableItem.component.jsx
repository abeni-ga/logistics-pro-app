import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../constants/Theme.js";
const CompaniesOrderPoolTableItem = () => {
  return (
    <div className="flex w-full h-24 items-center bg-white rounded-lg">
      <Typography
        sx={{ color: color.lightGray, width: "4%", textAlign: "center" }}
      >
        01
      </Typography>
      <div className="flex flex-col w-[7%] items-start">
        <Typography sx={{ color: color.darkIndigo, fontWeight: "bold" }}>
          #00112244
        </Typography>
        <Typography sx={{ color: color.darkIndigo }}>
          TC Riders pushed this
        </Typography>
      </div>
      <Typography sx={{ color: color.lightGray, width: "8%" }}>
        Book Delivery
      </Typography>
      <div className="flex gap-2 w-[14%]">
        <Avatar />
        <div className="flex flex-col">
          <Typography>Olaniyi Ojo David</Typography>
          <Typography sx={{ color: color.lightGray }}>091612891010</Typography>
        </div>
      </div>
      <div className="w-[16%]">
        <Typography sx={{ color: color.lightGray }}>
          10/10/2021 01:37PM
        </Typography>
        <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
      </div>
      <div className="flex gap-2 w-[14%]q1  ">
        <Avatar />
        <div className="flex flex-col">
          <Typography>Olaniyi Ojo David</Typography>
          <Typography sx={{ color: color.lightGray }}>091612891010</Typography>
        </div>
      </div>
      <div className="w-[16%]">
        <Typography sx={{ color: color.lightGray }}>
          10/10/2021 01:37PM
        </Typography>
        <Typography>14, Kumolu Street. Ikeja, Lagos</Typography>
      </div>
      <Typography sx={{ color: color.lightGray, width: "10%" }}>
        Books (2 Dozens)
      </Typography>
      <div className="flex flex-col gap-2 w-[6%]">
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
      <Typography sx={{ width: "4%" }}>
        <MoreHorizIcon />
      </Typography>
    </div>
  );
};

export default CompaniesOrderPoolTableItem;
