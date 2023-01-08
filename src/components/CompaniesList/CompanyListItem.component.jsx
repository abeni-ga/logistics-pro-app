import { NavLink } from "react-router-dom";
import { Avatar, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from "../../assets/svg/Profile.svg";
import { color } from "../../constants/Theme.js";
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
          <Typography sx={{ fontWeight: "bold" }}>FZ Deliveries</Typography>
          <Typography sx={{ color: color.lightGray }}>
            46, Alade Road, Allen Avenue Lagos
          </Typography>
        </div>
        <Typography sx={{ width: "8.333333%" }}>#001234567</Typography>
        <div className="flex flex-col w-1/6">
          <Typography sx={{ fontWeight: "bold" }}>09162289232</Typography>
          <Typography sx={{ color: color.lightGray }}>
            Ibrahim Williams
          </Typography>
        </div>
        <div className="w-1/6">
          <Typography sx={{ fontWeight: "bold" }}>Annual</Typography>
          <Typography sx={{ color: color.lightGray }}>
            21 Oct 2021 - 22 Oct 2022
          </Typography>
        </div>
        <Typography
          sx={{
            width: "8.333333%",
            fontWeight: "bold",
            color: color.darkIndigo,
          }}
        >
          N390,000.00
        </Typography>
        <div className="w-1/12">
          <Typography sx={{ fontWeight: "bold" }}>200</Typography>
          <Typography sx={{ color: color.lightGray }}>Active</Typography>
        </div>
        <div className="w-1/12">
          <Typography
            sx={{
              width: "fit-content",
              backgroundColor: color.brightGreen,
              borderRadius: "10px",
              padding: "10px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Vertified
          </Typography>
        </div>
        <IconButton sx={{ marginLeft: "24px" }}>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </NavLink>
  );
};

export default CompanyListItem;
