import { Avatar, Button, Typography } from "@mui/material";
import Profile from "../../../assets/svg/Profile.svg";

const ProfileCard = () => {
  return (
    <div className="border-b-2 border-gray-200 w-[90%] pb-2 flex items-center justify-between">
      <div className="flex gap-4">
        <Avatar variant="rounded" src={Profile} />
        <div className="flex flex-col">
          <Typography className="font-bold">FZ Deliveries</Typography>
          <div className="flex">
            <Typography className="text-lightGray">
              46, Alade Road, Allen Avenue Lagos{" "}
            </Typography>
          </div>
        </div>
      </div>
      <Button
        className="text-lightGray capitalize text-base rounded-xl border-lightGray"
        size="small"
        variant="outlined"
      >
        Assign
      </Button>
    </div>
  );
};

export default ProfileCard;
