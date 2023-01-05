import { Avatar, Button, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from "../../assets/svg/Profile.svg";
const UserInfoDetail = () => {
  return (
    <div className="flex h-56 gap-4 px-4 w-4/5 items-center rounded-xl drop-shadow-lg bg-white -mt-40">
      <Avatar
        src={Profile}
        variant="rounded"
        sx={{
          height: "80%",
          width: "40%",
          alignItems: "center",
        }}
      />
      <div className="flex flex-col justify-around h-4/5 ">
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "32px" }}>
          FZ Deliveries
        </Typography>
        <div className="flex gap-4 items-center">
          <Button
            size="small"
            variant="contained"
            sx={{
              borderRadius: "10px",
              textTransform: "capitalize",
              backgroundColor: "green",
            }}
          >
            Vertified
          </Button>
          <div className="flex gap-4 items-center">
            <Typography sx={{ color: "#9CA3AF" }}>* Bike</Typography>
            <Typography sx={{ color: "#9CA3AF" }}>* Bus</Typography>
          </div>
        </div>
        <div className="flex gap-8">
          <Typography sx={{ fontSize: "16px", color: "#9CA3AF" }}>
            46, Alade Road, Allen Avenue Lagos
          </Typography>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default UserInfoDetail;
