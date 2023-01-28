import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from "../../../assets/svg/Profile.svg";
const CompanyInfoDetail = (props) => {
  return (
    <div className="flex h-44 2xl:h-56 gap-4 px-4 w-4/5 items-center rounded-xl drop-shadow-lg bg-white">
      <Avatar
        className="w-10 h-10 xl:w-20 xl:h-20 2xl:w-32 2xl:h-32"
        variant={!props.user ? "rounded" : undefined}
        src={Profile}
        sx={{
          alignItems: "center",
        }}
      />
      <div className="flex flex-col gap-5 h-4/5 ">
        <Typography variant="h1" className="font-bold xl:text-2xl 2xl:text-4xl">
          FZ Deliveries
        </Typography>
        <div className="flex gap-4 items-center">
          <Typography className="rounded-lg text-xs 2xl:text-sm bg-brightGreen p-2 text-white">
            Vertified
          </Typography>
          <div className="flex gap-4 items-center">
            <Typography className="text-lightGray text-xs 2xl:text-base">
              * Bike
            </Typography>
            <Typography className="text-lightGray text-xs 2xl:text-base">
              * Bus
            </Typography>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <Typography className="text-lightGray  text-xs 2xl:text-base">
            46, Alade Road, Allen Avenue Lagos
          </Typography>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoDetail;
