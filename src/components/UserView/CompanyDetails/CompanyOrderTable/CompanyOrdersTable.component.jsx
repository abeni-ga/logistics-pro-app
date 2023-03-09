import { Typography } from "@mui/material";

import CompanyOrderItem from "./CompanyOrderItem.component";

const CompanyOrdersTable = () => {
  return (
    <div className="w-full flex flex-col gap-2 bg-gray-200 rounded-lg py-2">
      <div className="flex w-full items-center justify-center">
        <div className="flex w-[99%] gap-2 sticky top-0">
          <div className="w-[5%]"></div>
          <Typography className="w-[10%]">Order Id</Typography>
          <Typography className="w-[20%]">Pick-Up</Typography>
          <Typography className="w-[20%]">Delivery</Typography>
          <Typography className="w-[20%]">Customer Name</Typography>
          <Typography className="w-[10%]">Refund</Typography>
          <Typography className="w-[10%]">Earning</Typography>
        </div>
      </div>
      <CompanyOrderItem />
    </div>
  );
};

export default CompanyOrdersTable;
