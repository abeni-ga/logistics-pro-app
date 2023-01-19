import CompanyAccountDetail from "./CompanyAccountDetail.component";
import CompanyInfoDetail from "./CompanyInfoDetail.component";
import CompanyOrdersList from "./CompanyOrderTable/CompanyOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Pulse from "../../../assets/svg/Pulse.svg";
import { color } from "../../../constants/Theme.js";
import FilterAndActionButton from "../../../components/PageFilterAndButton/OrderViewHeader";
const CompanyDetail = (props) => {
  const history = useNavigate();
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="h-[20%] flex items-center gap-2 ml-8">
        <IconButton
          onClick={() => {
            history(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
      </div>
      <div className="flex w-full h-screen pt-4">
        <div className="flex flex-col w-[35%] h-full items-center">
          <CompanyInfoDetail user={props.user ? true : false} />
          <CompanyAccountDetail />
        </div>
        <div className=" flex flex-col w-[65%] h-full items-center">
          <FilterAndActionButton btnName="New Company" />
          <div className="flex justify-between pl-10 w-full">
            <Typography
              sx={{ alignSelf: "end", fontSize: "20px", fontWight: "700" }}
            >
              Pool Order Taken
            </Typography>
            <div className="flex bg-[#4339F2] items-center rounded-2xl px-4 py-2 gap-2">
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
          </div>
          <CompanyOrdersList />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
