import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../constants/Theme.js";
import CompaniesOrderPoolTableItem from "./CompaniesOrderTableItem.component";

const CompaniesOrderPoolTable = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="flex w-full h-[5%] items-center justify-between">
        <Typography
          sx={{ color: color.lightGray, width: "4%", textAlign: "center" }}
        >
          S/N
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "7%" }}>
          Order ID
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "7%" }}>
          Order Title
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "13%" }}>
          Pick Up Customer
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "15%" }}>
          Pick UP Address
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "13%" }}>
          Delivery Contact
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "15%" }}>
          Delivery Address
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "9%" }}>
          Item Type
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "6%" }}>
          Charge
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "4%" }}>
          <MoreHorizIcon />
        </Typography>
      </div>
      <CompaniesOrderPoolTableItem />
      <CompaniesOrderPoolTableItem />
      <CompaniesOrderPoolTableItem />
      <CompaniesOrderPoolTableItem />
      <CompaniesOrderPoolTableItem />
      <CompaniesOrderPoolTableItem />
    </div>
  );
};

export default CompaniesOrderPoolTable;
