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
          <CheckIcon className="bg-bolow text-sm px-0.5 text-white rounded-sm" />
        </div>
        <div className="flex items-center gap-2 w-[30%]">
          <img src={CollectionCenter} alt="" />
          <Typography className="font-bold text-darkGray">
            Plane name
          </Typography>
        </div>
        <Typography className="w-[10%] font-bold text-darkGray">
          ₦390,000
        </Typography>
        <div className="flex w-[10%]">
          <Typography className="font-bold px-1 text-darkIndigo bg-bgWhiteSmoke text-center rounded-sm">
            Active
          </Typography>
        </div>
        <IconButton
          className="w-[5%] hover:bg-white"
          aria-describedby={id}
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
            <Button onClick={handleDelete} className="w-[150px] text-darkGray">
              Delete
            </Button>
            <div className="w-full h-0.5 bg-slate-200"></div>
            <Button className="w-[150px] text-darkGray">Edit</Button>
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
