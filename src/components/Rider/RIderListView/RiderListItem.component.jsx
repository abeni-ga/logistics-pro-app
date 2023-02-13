import { Avatar, Tooltip, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PPic from "../../../assets/svg/PPic.svg";

const RiderListItem = ({ rider, onClick }) => {
  return (
    <div
      className="flex w-full min-h-[96px] bg-white rounded-xl items-center py-2"
      onClick={onClick}
    >
      <div className="w-[10%] flex justify-center">
        <Avatar size="large" src={rider.detail?.profilePhoto || PPic} />
      </div>
      <div className="flex flex-col w-[20%]">
        <Typography className="font-bold">{`${rider.detail?.firstName} ${rider.detail?.lastName}`}</Typography>
        <Tooltip title={rider._id}>
          <Typography>{rider._id.substring(0, 9)}...</Typography>
        </Tooltip>
      </div>
      <div className="flex flex-col w-[25%]">
        <Typography className="text-lightGray">{rider.phone}</Typography>
        <Typography>{rider.email}</Typography>
      </div>
      <div className="flex flex-col w-[25%]">
        {/* <Typography className="text-darkIndigo font-bold">
          N390,000.00
        </Typography> */}
        <Typography className="text-lightGray font-bold">
          {`${rider.detail?.orderCount.length} Deliveries`}
        </Typography>
      </div>
      <div className="w-[15%]">
        <Typography
          className={` w-min p-1 rounded-md font-bold ${
            rider.accountStatus === "Active"
              ? "bg-lightGreen text-brightGreen"
              : "bg-red-100 text-red-500"
          }`}
        >
          {rider.accountStatus}
        </Typography>
      </div>
      <Typography>
        <MoreHorizIcon />
      </Typography>
    </div>
  );
};

export default RiderListItem;
