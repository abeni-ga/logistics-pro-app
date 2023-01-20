import { Typography } from "@mui/material";
import RiderOrderTableItem from "./RiderOrderTableItem.component";

const CompanyOrdersTable = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 bg-gray-200 rounded-lg py-2">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex w-[99%] gap-2">
          <div className="w-[5%]"></div>
          <Typography className="w-[15%]" sx={{ width: "15%" }}>
            Order Id
          </Typography>
          <Typography className="w-[30%]">Pick-Up</Typography>
          <Typography className="w-[30%]">Delivery</Typography>
          <Typography className="w-[10%]">Refund</Typography>
          <Typography className="w-[10%]">Earning</Typography>
        </div>
      </div>
      <RiderOrderTableItem />
      <RiderOrderTableItem />
      <RiderOrderTableItem />
      <RiderOrderTableItem />
      <RiderOrderTableItem />
      <RiderOrderTableItem />
    </div>
  );
};

export default CompanyOrdersTable;
