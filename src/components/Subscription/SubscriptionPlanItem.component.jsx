import { color } from "../../constants/Theme.js";
import { Button, IconButton, Popover, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CollectionCenter from "../../assets/svg/CollectionCenter.svg";
import { useState } from "react";
import DeleteDialog from "../Dialog/DeleteDialog.component.jsx";
const SubscriptionPlanItem = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialog, setDialog] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    setDialog(true);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full min-h-[10%] bg-white rounded-lg items-center">
        <div className="w-[4%] flex justify-center">
          <CheckIcon
            sx={{
              backgroundColor: color.bolow,
              fontSize: "small",
              paddingX: "2px",
              color: "white",
              borderRadius: "4px",
            }}
          />
        </div>
        <div className="flex items-center gap-2 w-[30%]">
          <img src={CollectionCenter} alt="" />
          <Typography sx={{ fontWeight: "700", color: color.darkGray }}>
            Plane name
          </Typography>
        </div>
        <Typography
          sx={{ width: "10%", fontWeight: "700", color: color.darkGray }}
        >
          ₦390,000
        </Typography>
        <div className="flex w-[10%]">
          <Typography
            sx={{
              fontWeight: "700",
              paddingX: "6px",
              color: color.darkIndigo,
              backgroundColor: color.bgWhiteSmoke,
              textAlign: "center",
              borderRadius: "4px",
            }}
          >
            Active
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
          <MoreHorizIcon />
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
            <Button
              onClick={handleDelete}
              sx={{ width: "150px", color: color.darkGray }}
            >
              Delete
            </Button>
            <div className="w-full h-0.5 bg-slate-200"></div>
            <Button sx={{ width: "150px", color: color.darkGray }}>Edit</Button>
          </div>
        </Popover>
      </div>
      <DeleteDialog
        open={dialog}
        handleClose={() => {
          setDialog(false);
        }}
      />
    </div>
  );
};

export default SubscriptionPlanItem;
