import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InternalOrderPoolTableItem from "./InternalOrderTableItem.component";

const InternalOrderPoolTable = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="flex w-full h-[5%] items-center">
        <Typography className="text-lightGray w-[10%] text-center">
          S/N
        </Typography>
        <Typography className="text-lightGray w-[15%]">Order ID</Typography>
        <Typography className="text-lightGray w-[20%]">
          Pick UP Address
        </Typography>
        <Typography className="text-lightGray w-[20%] text-start">
          Delivery Address
        </Typography>
        <Typography className="text-lightGray w-[10]%">Item Type</Typography>
        <Typography className="text-lightGray w-[15]%">Charge</Typography>
        <Typography className="text-lightGray w-[5%]">
          <MoreHorizIcon />
        </Typography>
      </div>
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
      <InternalOrderPoolTableItem />
    </div>
  );
};

export default InternalOrderPoolTable;
