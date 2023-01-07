import { Avatar, Button, Typography } from "@mui/material";
import Profile from "../../../assets/svg/Profile.svg";
import { color } from "../../../constants/Theme.js";
const ProfileCard = () => {
  return (
    <div className="border-b-2 border-gray-200 w-[90%] pb-2 flex items-center justify-between">
      <div className="flex gap-4">
        <Avatar variant="rounded" src={Profile} />
        <div className="flex flex-col">
          <Typography sx={{ fontWeight: "bold" }}>FZ Deliveries</Typography>
          <div className="flex">
            <Typography sx={{ color: color.lightGray }}>
              46, Alade Road, Allen Avenue Lagos{" "}
            </Typography>
          </div>
        </div>
      </div>
      <Button
        size="small"
        sx={{
          color: color.lightGray,
          textTransform: "capitalize",
          fontSize: "16px",
          borderRadius: "12px",
          borderColor: color.lightGray,
        }}
        variant="outlined"
      >
        Assign
      </Button>
    </div>
  );
};

export default ProfileCard;
