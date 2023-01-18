import { NavLink } from "react-router-dom";
import { Avatar, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Profile from "../../../assets/svg/Profile.svg";
import { color } from "../../../constants/Theme.js";
const UserListItem = (prop) => {
  return (
    <NavLink to={prop.route}>
      <div className="flex items-center p-1 xl:p-4 bg-white w-full rounded-xl gap-1 xl:gap-2">
        <div className="w-[6%] xl:w-[8%]">
          <Avatar
            className="lg:w-12 lg:h-12 xl:w-16 xl:h-16"
            src={Profile}
            alt=""
            variant="rounded"
          />
        </div>
        <div className="w-[20%]">
          <Typography
            className="text-xs xl:text-sm"
            sx={{ fontWeight: "bold" }}
          >
            FZ Deliveries
          </Typography>
          <Typography
            className="text-xs xl:text-sm"
            sx={{ color: color.lightGray }}
          >
            46, Alade Road, Allen Avenue Lagos
          </Typography>
        </div>
        <Typography className="text-xs xl:text-sm" sx={{ width: "10%" }}>
          #001234567
        </Typography>
        <div className="flex flex-col pl-1 w-[15%]">
          <Typography
            className="text-xs xl:text-sm"
            sx={{ fontWeight: "bold" }}
          >
            09162289232
          </Typography>
          <Typography
            className="text-xs xl:text-sm"
            sx={{ color: color.lightGray }}
          >
            Ibrahim Williams
          </Typography>
        </div>
        <div className="w-[15%]">
          <Typography
            className="text-xs xl:text-sm"
            sx={{ fontWeight: "bold" }}
          >
            Annual
          </Typography>
          <Typography
            className="text-xs xl:text-sm"
            sx={{ color: color.lightGray }}
          >
            21 Oct 2021 - 22 Oct 2022
          </Typography>
        </div>
        <Typography
          className={`text-xs xl:text-sm w-[12%] xl:w-[10%] font-bold text-[#053079]`}
        >
          N390,000.00
        </Typography>
        <div className="w-[6%] xl:w-[8%]">
          <Typography
            className="text-xs xl:text-sm"
            sx={{ fontWeight: "bold" }}
          >
            200
          </Typography>
          <Typography
            className="text-xs xl:text-sm"
            sx={{ color: color.lightGray }}
          >
            Active
          </Typography>
        </div>
        <div className="w-[8%]">
          <Typography className="text-xs xl:text-sm color w-min bg-green-400 rounded-lg p-2 text-white font-bold">
            Vertified
          </Typography>
        </div>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </NavLink>
  );
};

export default UserListItem;
