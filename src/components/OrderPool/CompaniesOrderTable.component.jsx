import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CompaniesOrderPoolTableItem from "./CompaniesOrderTableItem.component";

const CompaniesOrderPoolTable = ({ orders }) => {
  return (
    <div className=" flex flex-col gap-2 w-full h-full">
      <div className=" flex w-full h-[5%] items-center justify-between">
        <Typography className=" text-xs xl:text-sm text-lightGray w-[3%] text-center ">
          S/N
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[7%] ">
          Order ID
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[7%] ">
          Order Title
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[14%] ">
          Pick Up Customer
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[15%] ">
          Pick UP Address
        </Typography>
        <Typography className=" text-xs xl:text-sm text-lightGray w-[14%] ">
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
        <Typography className=" text-xs xl:text-sm text-lightGray w-[3%] ">
          <MoreHorizIcon />
        </Typography>
      </div>
      {orders.map((order, index) => {
        return <CompaniesOrderPoolTableItem order={order} key={index} />;
      })}
    </div>
  );
};

export default CompaniesOrderPoolTable;
