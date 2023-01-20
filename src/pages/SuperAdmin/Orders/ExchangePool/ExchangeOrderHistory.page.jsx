import { Typography } from "@mui/material";
import CompaniesOrderHistroyComp from "../../../../components/OrderPool/CompaniesOrderHistoryComp.component";

const ExchangePoolOrderHistory = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-[15%] pl-12">
        <Typography className="font-bold text-2xl">Order History</Typography>
      </div>
      <CompaniesOrderHistroyComp />
    </div>
  );
};

export default ExchangePoolOrderHistory;
