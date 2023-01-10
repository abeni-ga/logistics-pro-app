import CompanyAccountDetail from "../../../components/UserView/CompanyDetails/CompanyAccountDetail.component";
import CompanyInfoDetail from "../../../components/UserView/CompanyDetails/CompanyInfoDetail.component";
import CompanyOrdersList from "../../../components/UserView/CompanyDetails/CompanyOrderTable/CompanyOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Pulse from "../../../assets/svg/Pulse.svg";
import { color } from "../../../constants/Theme.js";
import FilterAndActionButton from "../../../components/PageFilterAndButton/OrderViewHeader";
const LogisticsCompanyDetail = () => {
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
          Logistic Companies
        </Typography>
      </div>
      <div className="flex w-full h-screen pt-4">
        <div className="flex flex-col w-[35%] h-full items-center">
          <CompanyInfoDetail />
          <CompanyAccountDetail />
        </div>
        <div className=" flex flex-col w-[65%] h-full items-center">
          <FilterAndActionButton btnName="New Company" />
          <div className="flex justify-between pl-10 w-full">
            <Typography sx={{ alignSelf: "end" }}>Pool Order Taken</Typography>
            <div className="flex bg-indigo-500 items-center rounded-2xl px-4 py-2 gap-2">
              <img src={Pulse} alt="" />
              <div>
                <Typography sx={{ color: color.bgWhiteSmoke }}>
                  Total
                </Typography>
                <Typography sx={{ color: "white" }}>N234,500:00</Typography>
              </div>
            </div>
          </div>
          <CompanyOrdersList />
        </div>
      </div>
    </div>
  );
};

export default LogisticsCompanyDetail;
