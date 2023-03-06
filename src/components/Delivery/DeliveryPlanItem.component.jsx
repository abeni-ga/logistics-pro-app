import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, IconButton, Popover, Typography } from "@mui/material";
import CollectionCenter from "../../assets/svg/CollectionCenter.svg";
import { useState } from "react";
import DeleteDialog from "../Dialog/DeleteDialog.component.jsx";
import DeactiveDialog from "../Dialog/Deactivate.component.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/siteRoutes.routes";
const DeliveryPlanItem = ({ plan }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { description, name } = plan;
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
    navigate(routes.admin.editDeliveryPlan, { state: { plan: plan } });
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
        <Typography className="text-darkGray font-bold">{name}</Typography>
        <Typography className="text-[8px] text-darkGray">
          {description}
        </Typography>
      </div>
      <div className="w-[30%] flex justify-start">
        <Typography className="font-bold text-darkIndigo bg-lightBlue px-4 rounded-md">
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
          <Button
            onClick={() => {
              handleEdit();
            }}
            className="w-[150px] text-darkGray"
          >
            Edit Details
          </Button>
          <div className="w-full h-0.5 bg-slate-200"></div>
          <Button
            onClick={handleDeactivate}
            className="w-[150px] text-darkGray"
          >
            Deactivate
          </Button>
          <div className="w-full h-0.5 bg-slate-200"></div>
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

export default DeliveryPlanItem;
