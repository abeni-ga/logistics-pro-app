import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PPic from "../../../assets/svg/PPic.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes";
const RiderInfoDetail = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex h-56 gap-4 px-4 w-4/5 items-center rounded-xl drop-shadow-lg bg-white z-10"
      onClick={() => {
        navigate(routes.admin.riderDetail);
      }}
    >
      <div className="flex flex-col w-[30%] h-full pt-7">
        <Avatar className="h-20 w-20 xl:h-24 xl:w-24 self-center" src={PPic} />
        {props.phone ? <Typography>+2340101010110</Typography> : null}
      </div>
      <div className="flex flex-col justify-around h-[80%] ">
        <Typography
          className="font-bold text-lg lg:text-xl xl:text-3xl"
          variant="h5"
        >
          Bolade Davies
        </Typography>
        <div className="flex gap-2 xl:gap-4 items-center">
          <Typography className="rounded-lg bg-green-500 text-white text-xs xl:text-sm p-1 xl:p-2">
            Vertified
          </Typography>
          <Typography className="text-gray-400">* Bike</Typography>{" "}
        </div>
        <div className="flex gap-4 xl:gap-8">
          <Typography className="text-gray-400 lg:text-sm xl:text-base">
            46, Alade Road, Allen Avenue Lagos
          </Typography>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default RiderInfoDetail;
