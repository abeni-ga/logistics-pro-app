import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PPic from "../../../assets/svg/PPic.svg";
import { color } from "../../../constants/Theme.js";
const UserInfoDetail = () => {
  return (
    <div className="flex h-56 gap-4 px-4 w-4/5 items-center rounded-xl drop-shadow-lg bg-white">
      <Avatar
        src={PPic}
        sx={{
          height: "70%",
          width: "30%",
          alignItems: "center",
        }}
      />
      <div className="flex flex-col justify-around h-4/5 ">
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: "38px", color: color.darkGray }}
        >
          Jhon Doe
        </Typography>
        <div className="flex gap-4 items-center">
          <Typography
            sx={{
              borderRadius: "10px",
              backgroundColor: color.brightGreen,
              padding: "10px",
              color: "white",
            }}
          >
            Vertified
          </Typography>
        </div>
        <div className="flex gap-8">
          <Typography sx={{ fontSize: "16px", color: color.lightGray }}>
            46, Alade Road, Allen Avenue Lagos
          </Typography>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default UserInfoDetail;
