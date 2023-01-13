import CompanyAccountDetail from "../../../../components/UserView/CompanyDetails/CompanyAccountDetail.component";
import CompanyInfoDetail from "../../../../components/UserView/CompanyDetails/CompanyInfoDetail.component";
import CompanyOrdersList from "../../../../components/UserView/CompanyDetails/CompanyOrderTable/CompanyOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FilterAndActionButton from "../../../../components/PageFilterAndButton/OrderViewHeader";
const RetailCompanyDetail = () => {
  const history = useNavigate();
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="h-[10%] flex items-center gap-2 ml-8">
        <IconButton
          onClick={() => {
            history(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Retail Outlets
        </Typography>
      </div>
      <div className="flex w-full h-screen pt-4">
        <div className="flex flex-col w-[35%] h-full items-center">
          <CompanyInfoDetail />
          <CompanyAccountDetail retail />
        </div>
        <div className=" flex flex-col w-[65%] h-full items-center">
          <FilterAndActionButton btnName="New Company" />
          <CompanyOrdersList />
        </div>
      </div>
    </div>
  );
};

export default RetailCompanyDetail;
