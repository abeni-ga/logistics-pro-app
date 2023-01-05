import CompanyAccountDetail from "../../../components/CompanyDetails/CompanyAccountDetail.component";
import CompanyOrdersList from "../../../components/CompanyDetails/CompanyOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const RetailCompanyDetail = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="h-[10%] flex items-center gap-2 ml-8">
        <NavLink>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </NavLink>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Retail Companies
        </Typography>
      </div>
      <div className="flex w-full h-screen pt-4">
        <div className="flex w-[35%] h-full justify-center items-center">
          <CompanyAccountDetail />;
        </div>
        <div className=" flex w-[65%] h-full justify-center items-center">
          <CompanyOrdersList />
        </div>
      </div>
    </div>
  );
};

export default RetailCompanyDetail;
