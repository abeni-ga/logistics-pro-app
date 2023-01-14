import { Typography } from "@mui/material";
import EarningCompanyTableItem from "./EarningCompanyTableItem.component";

const EarningCompanyTable = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 w-full">
      <div className="flex bg-gray-100 w-full">
        <Typography sx={{ width: "25%" }}>Days</Typography>
        <Typography sx={{ width: "20%" }}>Order</Typography>
        <Typography sx={{ width: "20%" }}>Amount</Typography>
        <Typography sx={{ width: "20%" }}>Partner Order</Typography>
        <div className="w-[15%]"></div>
      </div>
      <EarningCompanyTableItem />
      <EarningCompanyTableItem />
      <EarningCompanyTableItem />
      <EarningCompanyTableItem />
      <EarningCompanyTableItem />
      <EarningCompanyTableItem />
    </div>
  );
};

export default EarningCompanyTable;
