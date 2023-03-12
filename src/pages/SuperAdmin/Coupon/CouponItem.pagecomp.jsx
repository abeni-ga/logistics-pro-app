import { MoreVert } from "@mui/icons-material";
import { Button, IconButton, Popover, Typography } from "@mui/material";
import { useState } from "react";
import { color } from "../../../constants/Theme.js";
import { activateCoupon, deactivateCoupon } from "../../../utils/apis.js";
import { toast } from "react-toastify";

const CouponItem = ({
  couponId,
  status,
  code,
  name,
  discountType,
  amount,
  onClick,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleDeactivateCoupon = async (values) => {
    try {
      const resp = await deactivateCoupon({}, values);
      handleClose();
      toast.success(resp?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleActivateCoupon = async (values) => {
    try {
      const resp = await activateCoupon({}, values);
      handleClose();
      toast.success(resp?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex w-full min-h-[13%] bg-white rounded-lg items-center px-10"
      onClick={onClick}
    >
      <Typography
        sx={{ fontSize: "20px", color: color.darkGray, width: "15%" }}
      >
        {code}
      </Typography>
      <div className="flex flex-col w-[30%]">
        <Typography sx={{ fontSize: "20px", color: color.darkGray }}>
          {name}
        </Typography>
        <Typography sx={{ color: color.darkGray }}>{discountType}</Typography>
      </div>
      <div className="w-[30%] flex">
        <Typography
          sx={{
            color: color.darkGray,
            backgroundColor: status === "Active" ? "#c4f5e3" : "#fee2e2",
            fontSize: "17px",
            paddingX: "50px",
            borderRadius: "20px",
          }}
        >
          {status}
        </Typography>
      </div>
      <Typography
        sx={{ fontSize: "20px", color: color.darkGray, width: "20%" }}
      >
        {amount}
      </Typography>
      {status === "active" ? null : (
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
      )}
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
            onClick={() => handleActivateCoupon({ id: couponId })}
            sx={{ width: "150px", color: color.darkGray }}
          >
            Activate
          </Button>
          <div className="w-full h-0.5 bg-slate-200"></div>
          <Button
            onClick={() => handleDeactivateCoupon({ id: couponId })}
            sx={{ width: "150px", color: color.darkGray }}
          >
            Deactivate
          </Button>
          {/* <div className="w-full h-0.5 bg-slate-200"></div>
          <Button
            onClick={handleClose}
            sx={{ width: "150px", color: color.darkGray }}
          >
            Cancel coupon
          </Button>
          <div className="w-full h-0.5 bg-slate-200"></div>
          <Button
            onClick={handleClose}
            sx={{ width: "150px", color: color.darkGray }}
          >
            Reactivate
          </Button> */}
        </div>
      </Popover>
    </div>
  );
};

export default CouponItem;
