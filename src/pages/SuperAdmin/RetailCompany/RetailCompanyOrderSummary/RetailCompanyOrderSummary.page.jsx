import { Typography } from "@mui/material";
import PageHeader from "../../../../components/Header/PageHeader.component";
import CompanyOrderSummary from "../../../../components/UserView/CompanyDetails/CompanyOrderTable/CompanyOrderSummary/CompanyOrderSummary.component";

const RetailCompanyOrderSummary = () => {
  return (
    <div className=" w-full h-screen px-10">
      <div className="h-[15%]">
        <PageHeader title="Order Summary" backBtn summary />
        <div>
          <Typography className="text-darkGray ">Order No:</Typography>
          <Typography className="font-bold text-darkGray" variant="h6">
            #00112233
          </Typography>
        </div>
      </div>
      <CompanyOrderSummary />
    </div>
  );
};

export default RetailCompanyOrderSummary;
