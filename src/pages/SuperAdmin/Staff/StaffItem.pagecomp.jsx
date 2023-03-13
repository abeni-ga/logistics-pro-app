import { Avatar, Button, IconButton, Popover, Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
const StaffItem = ({ onClick, staff }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(staff);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div
      className="flex w-full min-h-[13%] bg-white rounded-lg items-center"
      onClick={onClick}
    >
      <div className="flex justify-center w-[10%] ">
        <Avatar sx={{ height: "70px", width: "65px" }}>
          {staff.username.substring(0, 2).toUpperCase()}
        </Avatar>
      </div>
      <div className="flex flex-col w-[80%]">
        <Typography sx={{ fontSize: "24px", color: color.darkGray }}>
          {staff.username}
        </Typography>
        <Typography sx={{ color: color.darkGray, fontWeight: "17px" }}>
          {staff.email}
        </Typography>
      </div>

      <IconButton
        aria-describedby={id}
        sx={{
          width: "5%",
          ":hover": {
            backgroundColor: "white",
          },
        }}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="flex flex-col">
          <Button onClick={handleClose} sx={{ color: color.darkGray }}>
            Edit user Details
          </Button>
          <div className="w-full h-0.5 bg-slate-200"></div>
          <Button
            onClick={handleClose}
            sx={{ width: "150px", color: color.darkGray }}
          >
            Suspend user
          </Button>
          <div className="w-full h-0.5 bg-slate-200"></div>
          <Button
            onClick={handleClose}
            sx={{ width: "150px", color: color.darkGray }}
          >
            Delete user
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default StaffItem;
