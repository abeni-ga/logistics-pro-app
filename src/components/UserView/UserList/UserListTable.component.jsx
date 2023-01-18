import { Typography } from "@mui/material";
import { logisticsCompany } from "../../../data/LogisticsCompany.js";
import UserListItem from "./UserListItem.component";

const UserListTable = ({ route }) => {
  return (
    <div className="w-full h-full">
      <div className="flex p-1 xl:p-4 items-center w-full sticky top-0 gap-1 xl:gap-2">
        <span className="w-[6%] xl:w-[8%]  h-1"></span>
        <Typography className="w-[20%] text-gray-400 ">Company Name</Typography>
        <Typography className="w-[10%] text-gray-400">Reg. No</Typography>
        <Typography className="w-[15%] text-gray-400 ">
          Reference Name
        </Typography>
        <Typography className="w-[15%] text-gray-400 ">Subscription</Typography>
        <Typography className="w-[12%] xl:w-[10%] text-gray-400 ">
          Payment
        </Typography>
        <Typography className="w-[6%] xl:w-[8%] text-gray-400">
          Riders
        </Typography>
        <Typography className="w-[8%] text-gray-400">Status</Typography>
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
