import { Typography } from "@mui/material";
import EarningTableItem from "./EarningTableItem.component";

const EarningTable = ({ transaction, index }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 w-full">
      <div className="flex bg-gray-100 w-full justify-between">
        <Typography className="w-[20%]">Order</Typography>
        <Typography className="w-[20%] text-center">Payment</Typography>
        <Typography className="w-[20%] text-center">Partner Order</Typography>
        <div className="w-[20%]"></div>
      </div>
      <EarningTableItem transaction={transaction} index={index} />
    </div>
  );
};

export default EarningTable;
