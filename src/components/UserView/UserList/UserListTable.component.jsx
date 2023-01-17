import { Typography } from "@mui/material";
import { logisticsCompany } from "../../../data/LogisticsCompany.js";
import UserListItem from "./UserListItem.component";
import { color } from "../../../constants/Theme.js";

const UserListTable = ({ route }) => {
  return (
    <div className="w-full h-full">
      <div className="flex p-4 items-center w-full sticky top-0">
        <span className="w-1/12 h-1"></span>
        <Typography sx={{ width: "20%", color: color.lightGray }}>
          Company Name
        </Typography>
        <Typography sx={{ width: "8.333333%", color: color.lightGray }}>
          Reg. No
        </Typography>
        <Typography sx={{ width: "16.666667%", color: color.lightGray }}>
          Reference Name
        </Typography>
        <Typography sx={{ width: "16.666667%", color: color.lightGray }}>
          Subscription
        </Typography>
        <Typography sx={{ width: "8.333333%", color: color.lightGray }}>
          Payment
        </Typography>
        <Typography sx={{ width: "8.333333%", color: color.lightGray }}>
          Riders
        </Typography>
        <Typography sx={{ width: "8.333333%", color: color.lightGray }}>
          Status
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        {logisticsCompany.map((comp, index) => {
          return <UserListItem key={index} route={route} />;
        })}
      </div>
    </div>
  );
};

export default UserListTable;
