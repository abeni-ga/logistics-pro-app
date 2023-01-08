import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PPic from "../../assets/svg/PPic.svg";
import { color } from "../../constants/Theme.js";
const RiderInfoDetail = () => {
  return (
    <div className="flex h-56 gap-4 px-4 w-4/5 items-center rounded-xl drop-shadow-lg bg-white -mt-40 z-10">
      <Avatar
        src={PPic}
        sx={{
          height: "50%",
          width: "30%",
          alignSelf: "start",
          marginTop: "30px",
        }}
      />
      <div className="flex flex-col justify-around h-4/5 ">
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "32px" }}>
          Bolade Davies
        </Typography>
        <div className="flex gap-4 items-center">
          <Typography
            sx={{
              borderRadius: "10px",
              backgroundColor: color.brightGreen,
              color: "white",
              padding: "10px",
            }}
          >
            Vertified
          </Typography>
          <Typography sx={{ color: color.lightGray }}>* Bike</Typography>{" "}
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

export default RiderInfoDetail;
