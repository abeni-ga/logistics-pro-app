import UserAccountDetail from "../../../../components/UserView/DirectCustomerDetail/UserAccountDetail.component.jsx";
import UserOrdersList from "../../../../components/UserView/DirectCustomerDetail/UserOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PulseRed from "../../../../assets/svg/PulseRed.svg";
import Pulse from "../../../../assets/svg/Pulse.svg";
import { color } from "../../../../constants/Theme.js";
import UserInfoDetail from "../../../../components/UserView/DirectCustomerDetail/UserInfoDetail.component.jsx";
import TablePagination from "../../../../components/Pagination/TablePagination.component.jsx";
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
          View Customer
        </Typography>
      </div>
      <div className="flex w-full h-full">
        <div className="flex flex-col w-[35%] h-full items-center">
          <UserInfoDetail />
          <UserAccountDetail />
        </div>
        <div className=" flex flex-col gap-5 w-[65%] h-full items-center">
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
                  <Typography
                    sx={{ color: color.lightGray, fontWeight: "700" }}
                  >
                    N234,500:00
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <UserOrdersList />
          <TablePagination />
        </div>
      </div>
    </div>
  );
};

export default DirectCustomerDetail;
