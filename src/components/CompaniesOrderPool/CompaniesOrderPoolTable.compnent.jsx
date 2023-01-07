import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../constants/Theme.js";
import CompaniesOrderPoolTableItem from "./CompaniesOrderPoolTableItem.component";

const CompaniesOrderPoolTable = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="flex w-full h-[5%] items-center">
        <Typography
          sx={{ color: color.lightGray, width: "4%", textAlign: "center" }}
        >
          S/N
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "8%" }}>
          Order ID
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "8%" }}>
          Order Title
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "14%" }}>
          Pick Up Customer
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "16%" }}>
          Pick UP Address
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "14%" }}>
          Delivery Contact
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "16%" }}>
          Delivery Address
        </Typography>
        <Typography sx={{ color: color.lightGray, width: "10%" }}>
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
