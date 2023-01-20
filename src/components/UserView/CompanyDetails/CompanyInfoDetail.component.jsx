import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from "../../../assets/svg/Profile.svg";
const CompanyInfoDetail = (props) => {
  return (
    <div className="flex h-56 gap-4 px-4 w-4/5 items-center rounded-xl drop-shadow-lg bg-white">
      <Avatar
        className=""
        variant={!props.user ? "rounded" : undefined}
        src={Profile}
        sx={{
          height: 72,
          width: 72,
          alignItems: "center",
        }}
      />
      <div className="flex flex-col justify-around h-4/5 ">
        <Typography variant="h1" className="font-bold text-4xl">
          FZ Deliveries
        </Typography>
        <div className="flex gap-4 items-center">
          <Typography className="rounded-lg bg-brightGreen p-2 text-white">
            Vertified
          </Typography>
          <div className="flex gap-4 items-center">
            <Typography className="text-lightGray text-base">* Bike</Typography>
            <Typography className="text-lightGray text-base">* Bus</Typography>
          </div>
        </div>
        <div className="flex gap-8">
          <Typography className="text-lightGray text-base">
            46, Alade Road, Allen Avenue Lagos
          </Typography>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoDetail;
