import { Typography } from "@mui/material";
import { logisticsCompany } from "../../data/LogisticsCompany.js";
import CompanyListItem from "./CompanyListItem.component";

const CompaniesListTable = ({ route }) => {
  return (
    <div className="w-full h-full">
      <div className="flex p-4 items-center w-full">
        <span className="w-1/12 h-1"></span>
        <Typography sx={{ width: "20%", color: "#9CA3AF" }}>
          Company Name
        </Typography>
        <Typography sx={{ width: "8.333333%", color: "#9CA3AF" }}>
          Reg. No
        </Typography>
        <Typography sx={{ width: "16.666667%", color: "#9CA3AF" }}>
          Reference Name
        </Typography>
        <Typography sx={{ width: "16.666667%", color: "#9CA3AF" }}>
          Subscription
        </Typography>
        <Typography sx={{ width: "8.333333%", color: "#9CA3AF" }}>
          Payment
        </Typography>
        <Typography sx={{ width: "8.333333%", color: "#9CA3AF" }}>
          Riders
        </Typography>
        <Typography sx={{ width: "8.333333%", color: "#9CA3AF" }}>
          Status
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        {logisticsCompany.map((comp, index) => {
          return <CompanyListItem key={index} route={route} />;
        })}
      </div>
    </div>
  );
};

export default CompaniesListTable;
