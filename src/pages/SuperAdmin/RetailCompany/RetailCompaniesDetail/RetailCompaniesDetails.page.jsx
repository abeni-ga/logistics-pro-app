import CompanyAccountDetail from "../../../../components/UserView/CompanyDetails/CompanyAccountDetail.component";
import CompanyInfoDetail from "../../../../components/UserView/CompanyDetails/CompanyInfoDetail.component";
import CompanyOrdersList from "../../../../components/UserView/CompanyDetails/CompanyOrderTable/CompanyOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import PulseRed from "../../../../assets/svg/PulseRed.svg";
import Pulse from "../../../../assets/svg/Pulse.svg";
import { color } from "../../../../constants/Theme.js";
import FilterAndActionButton from "../../../../components/PageFilterAndButton/OrderViewHeader";
const RetailCompanyDetail = () => {
  const history = useNavigate();
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="h-[10%] flex items-center gap-2 ml-8 justify-between pr-5">
        <div className="flex items-center gap-2 ">
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
        <div className="flex self-end items-center gap-8">
          <Button
            variant="contained"
            sx={{
              backgroundColor: color.darkIndigo,
              color: "white",
              borderRadius: "10px",
            }}
            startIcon={<AddIcon />}
          >
            Create Order
          </Button>
          <div className="flex">
            <div className="flex bg-[#053079] items-center rounded-l-2xl px-4 py-2 gap-2">
              <img src={Pulse} alt="" />
              <div>
                <Typography
                  sx={{
                    color: color.bgWhiteSmoke,
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  Total
                </Typography>
                <Typography sx={{ color: "white", fontWeight: "700" }}>
                  N234,500:00
                </Typography>
              </div>
            </div>
            <div className="flex bg-white items-center rounded-r-2xl px-4 py-2 gap-2">
              <img src={PulseRed} alt="" />
              <div>
                <Typography
                  sx={{
                    color: color.lightGray,
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  Total
                </Typography>
                <Typography sx={{ color: color.lightGray, fontWeight: "700" }}>
                  N234,500:00
                </Typography>
              </div>
            </div>
          </div>
        </div>
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
