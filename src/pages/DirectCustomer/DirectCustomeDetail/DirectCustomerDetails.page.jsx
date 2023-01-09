import CompanyAccountDetail from "../../../components/CompanyDetails/CompanyAccountDetail.component";
import CompanyOrdersList from "../../../components/CompanyDetails/CompanyOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Pulse from "../../../assets/svg/Pulse.svg";
import PulseRed from "../../../assets/svg/PulseRed.svg";
import { color } from "../../../constants/Theme.js";
import AddIcon from "@mui/icons-material/Add";

import FilterAndActionButton from "../../../components/PageFilterAndButton/OrderViewHeader";
const DirectCustomerDetail = () => {
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
          <div className="flex justify-end gap-20 pl-10 w-full mr-5 items-center">
            <Button
              startIcon={<AddIcon />}
              sx={{
                textTransform: "capitalize",
                backgroundColor: color.darkIndigo,
              }}
              variant="contained"
            >
              Create Order
            </Button>
            <div className="flex w-80">
              <div className="flex bg-indigo-500 w-[50%] items-center px-4 py-2 gap-2 rounded-l-2xl">
                <img src={Pulse} alt="" />
                <div>
                  <Typography sx={{ color: color.bgWhiteSmoke }}>
                    Total
                  </Typography>
                  <Typography sx={{ color: "white" }}>N234,500:00</Typography>
                </div>
              </div>
              <div className="flex bg-white w-[50%] items-center px-4 py-2 gap-2 rounded-r-2xl">
                <img src={PulseRed} alt="" />
                <div>
                  <Typography sx={{ color: color.lightGray }}>
                    Current Order
                  </Typography>
                  <Typography
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "end",
                    }}
                  >
                    60
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <CompanyOrdersList />
        </div>
      </div>
    </div>
  );
};

export default DirectCustomerDetail;
