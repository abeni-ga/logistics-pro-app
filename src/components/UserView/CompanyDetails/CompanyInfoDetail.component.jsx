import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from "../../../assets/svg/Profile.svg";
import { color } from "../../../constants/Theme.js";
const CompanyInfoDetail = (props) => {
  return (
    <div className="flex h-56 gap-4 px-4 w-4/5 items-center rounded-xl drop-shadow-lg bg-white">
      <Avatar
        variant={!props.user ? "rounded" : undefined}
        src={Profile}
        sx={{
          height: "80%",
          width: "40%",
          alignItems: "center",
        }}
      />
      <div className="flex flex-col justify-around h-4/5 ">
        <Typography variant="h1" sx={{ fontWeight: "700", fontSize: "38px" }}>
          FZ Deliveries
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
          <div className="flex gap-4 items-center">
            <Typography sx={{ color: color.lightGray, fontSize: "16px" }}>
              * Bike
            </Typography>
            <Typography sx={{ color: color.lightGray, fontSize: "16px" }}>
              * Bus
            </Typography>
          </div>
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

export default CompanyInfoDetail;
