import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes";
const RiderInfoDetail = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex h-56 gap-4 px-4 w-4/5 items-center rounded-xl drop-shadow-lg bg-white z-10"
      onClick={() => {
        navigate(routes.admin.riderDetail, { state: { userId: user._id } });
      }}
    >
      <div className="flex flex-col w-[30%] h-full pt-7">
        <Avatar
          className="h-20 w-20 xl:h-24 xl:w-24 self-center"
          src={user?.detail?.profilePhoto}
        />
        {user?.phone ? <Typography>{user?.phone}</Typography> : null}
      </div>
      <div className="flex flex-col justify-around h-[80%] w-[70%]">
        <Typography
          className="font-bold text-lg lg:text-xl xl:text-3xl capitalize"
          variant="h5"
        >
          {user?.detail?.firstName + " " + user?.detail?.lastName}
        </Typography>
        <div className="flex gap-2 xl:gap-4 items-center">
          <Typography
            className={`rounded-lg text-white text-xs xl:text-sm p-1 xl:p-2 ${
              user?.verified ? "bg-green-500" : "bg-red-500"
            } `}
          >
            {user?.verified ? "Vertified" : "Pending"}
          </Typography>
          <Typography className="text-gray-400">* Bike</Typography>{" "}
        </div>
        <div className="flex justify-between ">
          <Typography className="text-gray-400 lg:text-sm xl:text-base">
            {user?.city}
          </Typography>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default RiderInfoDetail;
