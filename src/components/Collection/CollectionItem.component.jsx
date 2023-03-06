import { Button, IconButton, Popover, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteDialog from "../../components/Dialog/DeleteDialog.component";
import CollectionCenterIcon from "../../assets/svg/CollectionCenter.svg";
import { useState } from "react";
const CollectionItem = ({ collectionCenter }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialog, setDialog] = useState(false);

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

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  console.log(collectionCenter);

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full min-h-[10%] bg-white rounded-lg items-center">
        <div className="w-[4%] flex justify-center">
          <CheckIcon className="bg-bolow text-sm px-0.5 text-white rounded-md" />
        </div>

        <Typography className="text-darkIndigo w-[10%] font-bold">
          {`${collectionCenter._id.substring(0, 9)}...`}
        </Typography>
        <div className="flex items-center gap-2 w-[15%]">
          <img src={CollectionCenterIcon} alt="" />
          <Typography className="text-darkGray font-bold">
            {collectionCenter.name}
          </Typography>
        </div>
        <Typography className="w-[15%] font-bold text-darkGray">
          {collectionCenter.location}
        </Typography>
        <Typography className="w-[10%]">{`${
          collectionCenter.pickUpOrders ? collectionCenter.pickUpOrders : 0
        } Drop-offs`}</Typography>
        <Typography className="w-[10%]">{`${
          collectionCenter.dropOffOrders ? collectionCenter.dropOffOrders : 0
        } Drop-offs`}</Typography>
        <div className="flex w-[10%]">
          <Typography
            className={`bg-bgWhiteSmoke text-center rounded-md font-bold px-1 ${
              collectionCenter.status === "Active"
                ? "text-darkIndigo"
                : "text-red-300"
            }`}
          >
            {collectionCenter.status}
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

export default CollectionItem;
