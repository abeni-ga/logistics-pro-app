import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CompaniesOrderPoolTableItem from "./CompaniesOrderTableItem.component";

const CompaniesOrderPoolTable = () => {
  return (
    <div className=" flex flex-col gap-2 w-full h-full">
      <div className=" flex w-full h-[5%] items-center justify-between">
        <Typography className=" text-xs xl:text-sm text-lightGray w-[4%] text-center ">
          S/N
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[7%] ">
          Order ID
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[7%] ">
          Order Title
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[13%] ">
          Pick Up Customer
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[15%] ">
          Pick UP Address
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[13%] ">
          Delivery Contact
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[15%]">
          Delivery Address
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[9%] ">
          Item Type
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[6%] ">
          Charge
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[4%] ">
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
