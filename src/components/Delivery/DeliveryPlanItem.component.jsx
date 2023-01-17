import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../constants/Theme.js";
import { Button, IconButton, Popover, Typography } from "@mui/material";
import CollectionCenter from "../../assets/svg/CollectionCenter.svg";
import { useState } from "react";
import DeleteDialog from "../Dialog/DeleteDialog.component.jsx";
import DeactiveDialog from "../Dialog/Deactivate.component.jsx";
import { useNavigate } from "react-router-dom";
const DeliveryPlan = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deactiveDialog, setDeactiveDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = () => {
    setAnchorEl(null);
    navigate("/admin/delivery/edit");
  };
  const handleDeactivate = () => {
    setAnchorEl(null);
    setDeactiveDialog(true);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    setDeleteDialog(true);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="flex bg-white rounded-lg w-full min-h-[10%] items-center">
      <div className="flex justify-center w-[5%]">
        <img src={CollectionCenter} alt="" />
      </div>
      <div className="flex flex-col w-[60%]">
        <Typography sx={{ fontWeight: "700", color: color.darkGray }}>
          Express Delivery Service
        </Typography>
        <Typography sx={{ fontSize: "8px", color: color.darkGray }}>
          Delivery within 3 hours
        </Typography>
      </div>
      <div className="w-[30%] flex justify-start">
        <Typography
          sx={{
            fontWeight: "700",
            color: color.darkIndigo,
            backgroundColor: color.lightBlue,
            paddingX: "15px",
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
            onClick={handleEdit}
            sx={{ width: "150px", color: color.darkGray }}
          >
            Edit Details
          </Button>
          <div className="w-full h-0.5 bg-slate-200"></div>
          <Button
            onClick={handleDeactivate}
            sx={{ width: "150px", color: color.darkGray }}
          >
            Deactivate
          </Button>
          <div className="w-full h-0.5 bg-slate-200"></div>
          <Button
            onClick={handleDelete}
            sx={{ width: "150px", color: color.darkGray }}
          >
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

export default DeliveryPlan;
