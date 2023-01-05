import { NavLink } from "react-router-dom";
import { Avatar, Button, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from "../../assets/svg/Profile.svg";
const CompanyListItem = (prop) => {
  return (
    <NavLink to={prop.route}>
      <div className="flex items-center p-4 bg-white w-full rounded-xl flex-wrap">
        <div className="w-1/12">
          <Avatar
            sx={{ width: "75px", height: "75px" }}
            src={Profile}
            alt=""
            variant="rounded"
          />
        </div>
        <div className="w-1/5">
          <Typography>FZ Deliveries</Typography>
          <Typography sx={{ color: "#9CA3AF" }}>
            46, Alade Road, Allen Avenue Lagos
          </Typography>
        </div>
        <Typography sx={{ width: "8.333333%" }}>#001234567</Typography>
        <div className="flex flex-col w-1/6">
          <Typography>09162289232</Typography>
          <Typography sx={{ color: "#9CA3AF" }}>Ibrahim Williams</Typography>
        </div>
        <div className="w-1/6">
          <Typography>Annual</Typography>
          <Typography sx={{ color: "#9CA3AF" }}>
            21 Oct 2021 - 22 Oct 2022
          </Typography>
        </div>
        <Typography sx={{ width: "8.333333%" }}>N390,000.00</Typography>
        <div className="w-1/12">
          <Typography>200</Typography>
          <Typography sx={{ color: "#9CA3AF" }}>Active</Typography>
        </div>
        <div className="w-1/12">
          <Button variant="contained" color="success">
            Vertified
          </Button>
        </div>
        <IconButton sx={{ marginLeft: "24px" }}>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </NavLink>
  );
};

export default CompanyListItem;
