import UserAccountDetail from "../../../components/DirectCustomerDetail/UserAccountDetail.component";
import UserOrdersList from "../../../components/DirectCustomerDetail/UserOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
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
          Direct Customer
        </Typography>
      </div>
      <div className="flex w-full h-screen pt-4">
        <div className="flex w-[35%] h-full justify-center items-center">
          <UserAccountDetail />;
        </div>
        <div className=" flex w-[65%] h-full justify-center items-center">
          <UserOrdersList />
        </div>
      </div>
    </div>
  );
};

export default DirectCustomerDetail;
