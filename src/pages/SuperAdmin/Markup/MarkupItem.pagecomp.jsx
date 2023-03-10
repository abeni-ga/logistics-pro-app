import { Avatar, Button, Popover, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { color } from "../../../constants/Theme.js";
import { useState } from "react";
import DeactiveDialog from "../../../components/Dialog/Deactivate.component.jsx";
import DeleteDialog from "../../../components/Dialog/DeleteDialog.component.jsx";
const MarkupItem = ({ markup, onClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deactiveDialog, setDeactiveDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    setDeleteDialog(true);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div
      className="flex w-full min-h-[13%] bg-white rounded-lg items-center"
      onClick={onClick}
    >
      <div className="flex justify-center w-[10%] ">
        {/* <Avatar sx={{ height: "70px", width: "65px" }} /> */}
      </div>
      <div className="flex flex-col w-[80%]">
        <Typography sx={{ fontSize: "24px", color: color.darkGray }}>
          {markup.name}
        </Typography>
        <Typography sx={{ color: color.darkGray, fontWeight: "17px" }}>
          {`${markup.percent}%`}
        </Typography>
      </div>
      <MoreVertIcon
        className="w-[5%] hover:bg-white"
        aria-describedby={id}
        onClick={handleClick}
      />
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
        </div>
      </Popover>
      <DeleteDialog
        open={deleteDialog}
        handleClose={() => {
          setDeleteDialog(false);
        }}
      />
      <DeactiveDialog
        open={deactiveDialog}
        handleClose={() => {
          setDeactiveDialog(false);
        }}
      />
    </div>
  );
};

export default MarkupItem;
