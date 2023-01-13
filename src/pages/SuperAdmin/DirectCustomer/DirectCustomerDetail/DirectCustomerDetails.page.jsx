import UserAccountDetail from "../../../../components/UserView/DirectCustomerDetail/UserAccountDetail.component.jsx";
import UserOrdersList from "../../../../components/UserView/DirectCustomerDetail/UserOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import UserInfoDetail from "../../../../components/UserView/DirectCustomerDetail/UserInfoDetail.component.jsx";
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
        <div className=" flex w-[65%] h-full justify-center">
          <UserOrdersList />
        </div>
      </div>
    </div>
  );
};

export default DirectCustomerDetail;
